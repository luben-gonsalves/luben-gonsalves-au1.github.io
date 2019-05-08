"use strict";

var data = [];
var x;
var i = 31;
var timer;

$(document).ready(function() {
  var countClock = () => {
    var clock = $("#clock");
    i--;
    if (i < 0) {
      // disable the submit button if timer runs out
      $("#submit").attr("disabled", "true");
      clearInterval(timer);
      return alert("times up");
    }
    clock.text(i);
  };

  var updateContent = data => {
    //timer functions
    timer = setInterval(countClock, 1000);

    // generate random questions
    x = Math.floor(Math.random() * 10);
    var question = data[x]["question"];
    var ques = $("#question");
    ques.text(question);
  };

  var updateFunc = () => {
    $.get("quiz.json", quest => {
      console.log(quest);
      data = quest;
      updateContent(quest);
    });
  };

  updateFunc();

  var validate = () => {
    var input = $("#inputText").val();
    if (input == data[x]["answer"]) {
      alert("correct answer");
      $("#submit").attr("disabled", "true");
      clearInterval(timer);
    } else {
      $("#submit").attr("disabled", "true");
      alert("wrong answer");
      clearInterval(timer);
    }
  };
  var submit = $("#submit");
  submit.on("click", validate);
});
