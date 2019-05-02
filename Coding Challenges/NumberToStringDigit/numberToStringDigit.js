// "use strict";

// var text = ["zero","one","two","three","four","five","six","seven","eight","nine"]

// var convert = (num) => {
//   var arr = num.toString().split('') ;
//   return arr.map(x=>text[x]).join(" ");
// }

// convert(117);


"use strict";

var text = ["zero","one","two","three","four","five","six","seven","eight","nine"]

var convert = (num) => {
  var arr=[];
  var rem=0;
  while(num>0){
    rem=num%10;
    num=Math.floor(num/10);
    arr.push(text[rem])
  }
  return arr.reverse();
}

console.log(convert(117));


