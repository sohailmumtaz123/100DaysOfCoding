const express=require("express");
const app=express();
const path=require("path");

const port=8080;
// app.use(express.static("public")); //will give error if we run server from some other location.
app.use(express.static(path.join(__dirname, "/public"))); //Now we can run server from other directory
// app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res)=>{
    // res.send("This is Home.");
    res.render("home.ejs");
});
app.get("/rolldice", (req, res)=>{
    let getfromDB=Math.floor(Math.random()*6)+1;//let suppose this value is coming from Databse
    res.render("rolldice.ejs",{num:getfromDB}); //send the value to EJS
})
app.get("/ig/:username",(req, res)=>{
    let {username}=req.params;
    const instadata=require("./data.json"); //Let assume data.json is database
    let data=instadata[username];
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.send("No account found. Search for cats or dogs.")
    }  
})

app.get("/sohail", (req,res)=>{
    res.send("Hello Sohail. This is not EJS Template");
});

app.listen(port, (req, res)=>{
    console.log("App is listening!!");
})