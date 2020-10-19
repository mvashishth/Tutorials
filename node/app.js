const fetch = require('node-fetch');

let url = "https://www.reddit.com/r/popular.json";

let settings = { method: "Get" };
var zeta;
var port=3000;

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
    	zeta=json
    	for (var i=0;i<25;i++){
    	console.log(zeta.data.children[i].data.subreddit)
    }
    });

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send(zeta)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})