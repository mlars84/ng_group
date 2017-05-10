//requires
var express = require('express');
var bodyParser = require('body-parser');
var index = require('./modules/index');
var mongoose = require('mongoose');
var app = express();

//connect
mongoose.connect('localhost:27017/ngGroup');

//schema
var groupSchema = mongoose.Schema({
  name: String,
  description: String
});

//model
var groups = mongoose.model('groups', groupSchema);

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
  var newGroup = groups(req.body);
  newGroup.save().then(function() {
    res.sendStatus(200);
  });
});

app.get('/getItems', function(req, res){
  console.log(itemsArray);
  groups.find().then(function(data) {
    res.send(data);
  });

}); //end getItems
