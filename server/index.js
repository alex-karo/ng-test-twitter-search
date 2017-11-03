const express = require('express');
const app = express();
var Twit = require('twit');
const port = 3010;

const tweetCount = 5;

var T = new Twit({
  consumer_key: 'ppwIoMtJ4WigLfI7y2YjHm62Q',
  consumer_secret: 'yrmw5LxssZjh4Ex345zlB2zlTq3RFwR6v5viPyCKE99KZhraw1',
  app_only_auth: true,
  timeout_ms: 60 * 1000
});

const setHeaders = function (req, res, next) {
  res.header('Content', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(setHeaders);

app.get('/tweets/:tag', function (req, res) {
  const hashtag = req.params.tag.trim().replace(/^#+/, '');
  if (!hashtag) {
    res.status(400).send('Bad Request');
    return;
  }
  T.get('search/tweets', {q: '#' + hashtag, count: tweetCount}, function (err, data) {
    const tweets = data.statuses.map(tweet => ({
      id: tweet.id,
      created_at: tweet.created_at,
      text: tweet.text,
      userpic: tweet.user.profile_image_url,
      username: tweet.user.name
    }));
    res.json(tweets);
  })
});


app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});