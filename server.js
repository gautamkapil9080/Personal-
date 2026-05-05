// Definations of the file 
const express=require('express');
const app=express();
const path=require('path');
let port=3000;



// Set up for the File a
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine','ejs');
app.set("views", path.join(__dirname, "views"));


// Server started 

// 1. For the main route
app.get("/one",(req,res)=>{
    res.render("pages/index.ejs");
})

// 2. Route for the download resume 
app.get('/resume/download',(req,res)=>{
    res.send("Download is ready");
})

app.get('/contact/me',(req,res)=>{
    res.send("Contaact");
})

app.listen(port,(req,res)=>{
    console.log("listening!");
})