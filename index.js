const express = require('express');
const app = express()
const PORT = 7788;
const path = require('path');
    var fs = require('fs')
app.use(express.static(path.join(__dirname,"public")));

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.listen(
    PORT,
    () => console.log("Its alive on http://localhost:" + PORT + "")
)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get("/post/:id?", (req, res) => {
    console.log("lol")
    res.sendFile(path.join(__dirname, '/post.html'));
})

process.on('uncaughtException', err => {
    console.error(err && err.stack)
});
