	"use strict";

// Include express in our application
var express = require("express");

// Include body-parser in our application
var bodyParser = require("body-parser");

// Create the express "app"
var app = express();

// Tell ExpressJS that we are using Handlebars for the project
app.set("view engine", "hbs");

// Tell ExpressJS to use body-parser to receive form data.
app.use(bodyParser.urlencoded({ extended: false }));

// Global players variable to hold data
var playersData = [];

app.get("/players", function(request, response) {
  var data = {
    players: playersData,
    userName: "Luben"
  };
  response.render("players.hbs", data);
});

app.post("/players", function(request, response) {
  var playerName = request.body.playerName;
  var playerLocation = request.body.playerLocation;
  var obj = {};
  obj.name = playerName;
  obj.location = playerLocation;
  playersData.push(obj);

  // Once data is added, redirect to the GET page.
  response.redirect("/players");
});

app.listen(3000);
