const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Set up CORS
const cors = require('cors');
app.use(cors());

// Initialize our Storage
const storage = require('node-persist');
const manage = async () =>{
   await storage.init();
   await storage.clear();
}
manage()

// Create a GET request
app.get('/ListItems', async (req, res) => { 
    res.send(await storage.values());
});

// Create a POST request
app.post('/ListItems', bodyParser.json(), async (req, res) => { // Used bodyParser.json() middleware for JSON parsing
    const { title, desc } = req.body; // Destructure the body object
    await storage.setItem(title, desc);
    res.send('Added Todo Perfectly');
});

// Start our app on port 5000
app.listen(port, () => {
    console.log(`Server is started on port ${port}`); // Corrected the console log message
});
