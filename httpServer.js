const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  fs.readFile('prototype.html', function(error, html){
    res.write(html);
  });
  setTimeout(function(){
    res.write('<br>hello i\'m dog');
    res.end();
  },5000);

}).listen(8080);

console.log('connected on localhost:8080');
