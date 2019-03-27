"use strict";

var express = require("express");

var app = express();

//addition of two numbers
app.get("/add/:num1/:num2", (request, response) => {
  var num1 = request.params.num1;
  var num2 = request.params.num2;
  var result = parseInt(num1) + parseInt(num2);
  response.send(`The sum of ${num1} and ${num2} is ${result}`);
});

// subtraction of two numbers
app.get("/sub/:num1/:num2", (request, response) => {
  var num1 = request.params.num1;
  var num2 = request.params.num2;
  var result = parseInt(num1) - parseInt(num2);
  response.send(`The sub of ${num1} and ${num2} is ${result}`);
});

// multiplication of two numbers
app.get("/mul/:num1/:num2", (request, response) => {
  var num1 = request.params.num1;
  var num2 = request.params.num2;
  var result = parseInt(num1) * parseInt(num2);
  response.send(`The multiplication of ${num1} and ${num2} is ${result}`);
});

// division of two numbers
app.get("/div/:num1/:num2", (request, response) => {
  var num1 = request.params.num1;
  var num2 = request.params.num2;
  var result = parseInt(num1) / parseInt(num2);
  response.send(`The division of ${num1} and ${num2} is ${result}`);
});

app.listen(3000, () => {
  console.log("app has been started");
});
