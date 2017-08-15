const express = require('express')
const app = express()

var herbs = require('./model/herbs');

app.get('/api/herbs', (req, res) => {
  res.send(herbs.listHerbs());
});

app.get('/api/herb/:herb', (req, res) => {
  var result = herbs.getHerb(req.params.herb);
  if (result != null) {
    res.send(result);
  } else {
    res.status(404)
      .send(`Herb "${req.params.herb}" not found`);
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});