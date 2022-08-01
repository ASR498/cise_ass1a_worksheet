const express = require("express");
const articles = require("./dummydata/articles.js");


const server = express();


const paste_this_normally_since_no_comments_in_javascript = server.get('/api/articles', (req,res) => {res.json(articles);});


server.get('/api/articles/:id', (req,res) => {
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
});


server.listen(5000, console.log("server is working and listening PORT 5000"));

