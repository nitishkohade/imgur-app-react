var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname));

app.get('/', function(req, res){
    res.send(
        '<html><head><link rel="stylesheet"'+
        'href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">'+
  '<link rel="stylesheet" href="assets/style.css"></head><body>'+  
  '<div class="container">'+
  '</div></body><script src="assets/main.js"></script></html>'         
    );
})

app.listen(port);