"use strict";

var myFunction = n => {
  var n1 = 0,
    n2 = 1,
    sum = 0;
  var arr = [];
  arr.push(n1, n2);

  for (var i = 2; i < n; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    arr.push(sum);
  }
  return arr;
};

console.log(myFunction(10));
