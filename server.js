var express = require ('express');
var mongoose = require ('mongoose');
var path = require ('path');
var bodyparser = require ('body-parser');
var router = require ('./routes/api/items');
var proxy = require ('http-proxy-middleware');

const app = express ();

//body parser middleware
app.use (bodyparser.json ());

//DB config
const db = require ('./config/keys').mongoURI;

//connect to mongo
mongoose
  .connect (db)
  .then (() => console.log ('Mongo connect'))
  .catch (err => console.log (err));

//add routes
app.use ('/api/items', router);

app.use (proxy ('/api', {target: 'http://localhost:5000/'}));

// app.use('');

//  if (process.env.NODE_ENV === 'production') {
//    app.use (express.static ('build'));
//    app.get ('*', (req, res) => {
//      res.sendFile (path.resolve (__dirname, 'build', 'index.html'));
//    });
//  }

//Serve static content if in production env
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use (express.static ('build'));

  app.get ('*', (req, res) => {
    res.sendFile (path.resolve (__dirname, 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen (port, () => console.log (`server started on port ${port}`));
