var express = require("express");
var mongoose = require("mongoose");
var app = express();
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/test');












db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

