const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const static_path = path.join(__dirname,"../public");
const port = process.env.PORT || 5000;
const partialpath = path.join(__dirname,"../templates/partials")
//built in middleware
app.set('views', path.join(__dirname,"../templates/views"))
hbs.registerPartials(partialpath);

app.set("view engine","hbs");
app.use(express.static(static_path));
app.get("",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:"Opps Page Not Found"
    })
})

app.listen(port,()=>{
    console.log("listen port number 5000")
})