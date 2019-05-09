"use strict";

class MyArray {
  constructor(...num) {
    this.number = new Set(num);
  }

  print() {
    this.number.forEach(element => {
      console.log(element);
    });
  };

  search(elem) {
    console.log(this.number.has(elem));
  };
}

var arr = new MyArray(1, 2, 3, 4, 5, 6);

arr.print();
console.log("search==>")
arr.search(2);