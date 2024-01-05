// express is exporting a function that we are getting with require("express")
const express=require("express");
let app=express(); // this app will help us to create server-side app. app is an Object

let port=3000; // In app object there is a function listen, Alway listen Incoming API's requests
app.listen(port, ()=> {
    console.log("App is listening");
})

// app.use((req, res)=> {
//     console.log("Request received")
//     let output="<h1>Hi Sohail! This is response from server</h1> <h3> Here is the list of my Skills.</h3> <ul><li>Javascript</li> <li>React.js</li></ul>";
//     res.send(output);
// });

// ------routing-----
app.get("/", (req, res)=>{
    res.send("<h1>You are connected with root path Sohail! Nodemon is active now.</h1>");
});

app.get("/about", (req, res)=> {
    res.send("<h2>You are connected with about path. Let's check it with nodemon.</h2>");
});

app.get("*", (req, res)=>{
    res.send("<h3>This is wild path response. Random Path </h3>");
});