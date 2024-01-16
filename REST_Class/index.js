const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));//For view folder to access ejs files
app.use(express.static(path.join(__dirname, "public")));//for public folder
app.use(express.urlencoded({extended: true})); //Express can read post request and all types of api requests

const { v4: uuidv4 } = require('uuid'); //Auto create Random ID
const methodOverride = require('method-override');
app.use(methodOverride("_method"));

let posts=[
    {
        id:uuidv4(),
        username:"Sohail",
        content: "I'm a software engineer."
    },
    {
        id:uuidv4(),
        username: "Fahad",
        content: "I'm a student of 12th Grade. Going to become a Software Developer.",
    },
    {
        id:uuidv4(),
        username: "Shahzaib",
        content: "I'm a student of pre-engineering. Going to become a Business man."
    }
];

//Home page
app.get("/post", (req,res)=>{
    res.render("index.ejs", {posts});
})

//Create new post
app.get("/post/new", (req, res)=>{
    res.render("new.ejs");
})

//Push new post in the array
app.post("/post", (req, res)=>{
    let id=uuidv4();
    let {username, content}=req.body;
    posts.push({id, username, content});
    res.redirect("/post")
})

//Open single post in details
app.get("/post/:id", (req,res)=>{
    let {id}= req.params;
    let single_post=posts.find((p)=> id===p.id);
    res.render("show.ejs", {single_post});
})

//Edit post
app.get("/post/:id/edit", (req, res)=>{
    let {id} = req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("edit", {post});
});

//Updating Existing post by edeting it
app.patch("/post/:id", (req, res)=>{
    let {id} = req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=> id===p.id);
    post.content=newContent;
    res.redirect("/post");
})
//Delete
app.delete("/post/:id", (req, res)=>{
    let {id} = req.params;
    posts=posts.filter((p)=> id!==p.id);
    res.redirect("/post");
})

app.listen(port, (req, res)=>{
console.log("App is listening.");
})