//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//EXPRESS CONFIG
// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

//helps server interpret data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//ROUTER
//Indicates the "route" files to point to.
//shows to server how to respond when users visit a url or request data from a url
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//LISTEN
//"starts" the server
app.listen(PORT, function(){
console.log("FriendFinder App listening on PORT: " + PORT);
});