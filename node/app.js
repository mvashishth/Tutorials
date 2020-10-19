const fetch = require('node-fetch');

let url = "https://www.reddit.com/r/popular.json";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
    	for (var i=0;i<25;i++){
    	console.log(json.data.children[i].data.subreddit)
    }
    });
