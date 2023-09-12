// Get references to the username and password input fields
const user = document.getElementById("username");
const pass = document.getElementById("password");

// Define valid username and password for authentication
const valid_name = "admin@admin.com";
const valid_password = "123456";

// Add an event listener to the login button
document.getElementById("login").addEventListener("click", () => { 
    // Check if the entered username and password match the valid ones
    if (valid_name === user.value && valid_password === pass.value){
        // If they match, display a success message and log to the console
        alert("Login Successfully");
        console.log("Login successful");
    }
    else{
        // If they don't match, display an error message
        alert("Wrong ID or Password");
    }
});
