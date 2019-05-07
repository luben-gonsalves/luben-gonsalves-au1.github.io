"use strict";

function MyArray() {
  this.array = [];
  for (var i = 0; i < arguments.length; i++) {
    this.array.push(arguments[i]);
  }
}

MyArray.prototype.print = function() {
  this.array.forEach(element => {
    console.log(element);
  });
};

MyArray.prototype.search = function(elem) {
  return this.array.indexOf(elem);
};

MyArray.prototype.sort = function() {
  this.array.sort(function(a, b) {
    return b - a;
  });
};

var arr = new MyArray(1, 2, 3, 4, 5, 6);

console.log("current array")
arr.print();

console.log(arr.search(2));

console.log("sorted array in descending order");
arr.sort();
arr.print();
