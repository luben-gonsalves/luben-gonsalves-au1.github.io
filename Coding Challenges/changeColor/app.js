"use strict";

var slowButton = document.getElementById("slow");
var fastButton = document.getElementById("fast");
var body = document.getElementById("body");

var sec = 5000;
var interval;

var start = () => {
  interval = setInterval(changeColor, sec);
};

slowButton.addEventListener("click", () => {
  sec = sec + 1000;
  clearInterval(interval);
  interval = setInterval(changeColor, sec);
});

fastButton.addEventListener("click", () => {
  sec = sec - 1000;
  clearInterval(interval);
  interval = setInterval(changeColor, sec);
});

var changeColor = () => {
  console.log(body.style.background);
  console.log(sec);
  if (body.style.background == "red") {
    body.style.background = "blue";
  } else {
    body.style.background = "red";
  }
};

start();
