const http = require('http');
const EventEmitter = require('events').EventEmitter;

var chat = new EventEmitter();

var user;
var input;
var messenger = {};
var messages = [];
chat.on('message',function(message){
  input = message;
});

chat.on('from', function(from){
  user = from;
});

chat.on('append', function(){
  messenger.user = user;
  messenger.input = input;
  messages.push(messenger);
  user = '';
  input = '';
  messenger = {};
  return messages;
});

var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.on('close', function(req,res){
  console.log('byebye');
});

server.listen(8080);
