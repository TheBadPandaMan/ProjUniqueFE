const bodyParser = require('body-parser')
const express = require('express')
const requsest = require('request')
const https = require('https')

const app = express()

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const database = database(__dirname + 'firebase.js');

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})

app.listen(3000, function(req, res){
    console.log("Server is up!");
});

