var express = require('express');
var Twitter = require('twitter');

var router = express.Router();
var client = new Twitter({
  consumer_key: 'h6Ic4TjJ6jfjjy0JjqflRgVog',
  consumer_secret: '9ivtnijatLRWmb8s2AqI1WdvSBeU00h5CUjLd0g0sSo7nhGjhK',
  access_token_key: '746557872587190272-08NnP3aD8FqZvsDLfHdG2cjrK6XVo8i',
  access_token_secret: 'GojErLWWbUXTwURzMwybzS0IsC45B60oAtWKcF3tcKK4E'
});

router.get('/', function(req, res, next) {
  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  client.get('statuses/user_timeline', { screen_name: 'nodejs', count: 20 }, function(error, tweets, response) {
    if (!error) {
      res.status(200).render('index', { title: 'Express', tweets: tweets });
    }
    else {
      res.status(500).json({ error: error });
    }
  });
});

module.exports = router;
