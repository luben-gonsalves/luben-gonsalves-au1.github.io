"use strict";

var compareString = (string1, string2) => {
  var count = 0;
  var maxLength;
  var minLength;
  var lengthDiff;

  if (string1.length >= string2.length) {
    maxLength = string1.length;
    minLength = string2.length;
  } else {
    maxLength = string2.length;
    minLength = string1.length;
  }

  for (var i = 0; i < maxLength; i++) {
    if (string1[i] !== string2[i]) {
      count++;
    }
  }

  if (string1.length !== string2.length) {
    lengthDiff = maxLength - minLength;
  }

  if (!lengthDiff) {
    return "The difference in character is " + count;
  } else {
    return (
      "The difference in chracter is " +
      count +
      " And Difference in length is " +
      lengthDiff
    );
  }
};

console.log(compareString("luben", "lubenFrank"));
