// express is exporting a function that we are getting with require("express")
const express=require("express");
let app=express(); // this app will help us to create server-side app. app is an Object

let port=3000; // In app object there is a function listen, Alway listen Incoming API's requests
app.listen(port, ()=> {
    console.log("App is listening");
})

app.use((req, res)=> {
    console.log("Request received")
});