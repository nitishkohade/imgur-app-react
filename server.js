var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use("", express.static(__dirname));

app.get('/', function(req, res){
    res.send(
        '<html><head>'+
'<link rel="shortcut icon" href="img/icon.jpg"/>'+
'<link rel="stylesheet" href="style.css"></head><body>'+  
  '<div class="container">'+
  '</div></body><script src="main.js"></script></html>'         
    );
})

app.listen(port);