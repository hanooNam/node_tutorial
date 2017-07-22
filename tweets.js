var Twitter = require('twitter');
var express = require('express');

var app = express();
var client = new Twitter({
  consumer_key: 'h6Ic4TjJ6jfjjy0JjqflRgVog',
  consumer_secret: '9ivtnijatLRWmb8s2AqI1WdvSBeU00h5CUjLd0g0sSo7nhGjhK',
  access_token_key: '746557872587190272-08NnP3aD8FqZvsDLfHdG2cjrK6XVo8i',
  access_token_secret: 'GojErLWWbUXTwURzMwybzS0IsC45B60oAtWKcF3tcKK4E'
});


var name;
var content;
var quotes = [];
var dates = [];

app.get('/:names', (req,res) =>{
  var name = req.params.names;
  var content = {screen_name: name}
  client.get('statuses/user_timeline', content, function(error, tweets, response){
    if(!error){
      for (var i=0; i<20; i++){
        quotes.push(tweets[i].text);
        dates.push(tweets[i].created_at.slice(0,16))
        }
      }
  });

  res.render('quote.ejs', {
    name: name,
    quote: quotes,
    date: dates
  });
});

app.listen(8080, () =>{
  console.log('connected');
});
