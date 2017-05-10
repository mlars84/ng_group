//requires
var express = require('express');
var bodyParser = require('body-parser');
var index = require('./modules/index');

var app = express();

//globals
var itemsArray = [];

//uses
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', index);

//globals
var port = process.env.PORT || 2345;

app.listen(port, function() {
  console.log('listening on:', port);
});

app.post('/addItem', function(req,res){
  console.log('req.body: ', req.body);
  itemsArray.push(req.body);
});

app.get('/getItems', function(req, res){
  console.log(itemsArray);
  res.send(itemsArray);

}); //end getItems
