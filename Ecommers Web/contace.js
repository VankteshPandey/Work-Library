const user = document.getElementById("username");
const pass = document.getElementById("password");
const valid_name ="admin@admin.com";
const valid_password = "123456";


document.getElementById("login").addEventListener("click", () => { 
    if (valid_name === user.value && valid_password === pass.value){
        alert("Login Successfully")
        console.log("yes working")
    }
    else{
        alert("Worng ID or Password")
    }
    
});

// const user = document.getElementById("username");
// const pass = document.getElementById("password");
// const valid_name = "admin@admin.com";
// const valid_password = "123456";

// document.getElementById("login").addEventListener("click", () => {
//     if (valid_name === user.value && valid_password === pass.value) {
//         alert("Login Successfully");
//         console.log("yes working");
//     } else {
//         alert("Wrong ID or Password");
//     }
// });