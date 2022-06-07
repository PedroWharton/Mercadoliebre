const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo");
})

function get(get, direc){
    app.get(get, function(req, res){
        res.sendFile(path.resolve(__dirname, direc))
    })
    
}
get("/","views/home.html")
get("/register","views/register.html")
get("/login","views/login.html")