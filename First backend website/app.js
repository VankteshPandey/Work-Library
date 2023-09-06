const express = require("express");
const path = require("path");
const app = express();
var mongoose = require("mongoose");
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost:27017/mydata', {useNewUrlParser: true});
const parse = require("body-parser")
const port = 8000

// define mongoose schema
var indexSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    feedbak: String,
    password: String

});
var index = mongoose.model('index', indexSchema);
// express content 
app.use('/public', express.static('public')) ;// for surving statics file
app.use(express.urlencoded());

// pug content 
app.set('view engine', 'pug');  //set the template engine as pug
app.set('views', path.join(__dirname,'views')) ;// set the views directory

//Endpoint
app.get('/', (req,res)=>{
    res.status(200).render('index.pug')
});

app.post('/index', async (req, res) => {
    try {
        const { name, email, phone, feedback, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        

        const mydata = new index({
            name: name,
            email: email,
            phone: phone,
            feedback: feedback,
            password: hashedPassword // Store the hashed password in the database
        });

        await mydata.save();
        res.send("The content is saved");
    } catch (err) {
        res.status(400).send("Item was not saved");
    }
});
    
    


// Start server
app.listen(port, ()=>{
    console.log(`the application start successfully on port ${port}`);
});