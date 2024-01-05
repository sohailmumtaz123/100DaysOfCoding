const express=require("express");
const app=express();
const path=require("path");

const port=8080;
// app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res)=>{
    // res.send("This is Home.");
    res.render("home.ejs");
});

app.get("/sohail", (req,res)=>{
    res.send("Hello Sohail. This is not EJS Template");
});

app.listen(port, (req, res)=>{
    console.log("App is listening!!");
})