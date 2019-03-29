var express = require("express");

var app = new express();

var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/add", (request, response) => {
  var number1 = request.body.num1;
  var number2 = request.body.num2;
  var sum = parseInt(number1) + parseInt(number2);
  var data = {
    num1: number1,
    num2: number2,
    result: sum
  };
  response.json(data);
});

app.post("/sub", (request, response) => {
  var number1 = request.body.num1;
  var number2 = request.body.num2;
  var sum = parseInt(number1) - parseInt(number2);
  var data = {
    num1: number1,
    num2: number2,
    result: sum
  };
  response.json(data);
});

app.post("/mul", (request, response) => {
  var number1 = request.body.num1;
  var number2 = request.body.num2;
  var sum = parseInt(number1) * parseInt(number2);
  var data = {
    num1: number1,
    num2: number2,
    result: sum
  };
  response.json(data);
});

app.post("/div", (request, response) => {
  var number1 = request.body.num1;
  var number2 = request.body.num2;
  var sum = parseInt(number1) / parseInt(number2);
  var data = {
    num1: number1,
    num2: number2,
    result: sum
  };
  response.json(data);
});

app.listen(3000, () => {
  console.log("app has been started");
});
