const express= require("express");
const app=express();
const port= 8080;

//Middlewares
app.use(express.urlencoded({extended: true})); //It will make the post request readable for express
app.use(express.json());

app.listen(port, (req, res)=>{
    console.log("App is listening!")
})

app.get("/register", (req, res)=>{
    let {username, pass}=req.query;
    console.log(username);
    res.send(`This is Get Request. Welcome ${username}!`);
});

app.post("/register", (req, res)=>{
    let {username, pass}=req.body;
    res.send(`This is Post Response, Welcome ${username}!`);
});