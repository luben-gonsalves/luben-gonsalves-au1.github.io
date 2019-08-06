console.log(new Date());
function clock() {
  var fullDate = new Date();
  var hours = fullDate.getHours();
  var min = fullDate.getMinutes();
  var sec = fullDate.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = ":" + min;
  document.getElementById("sec").innerHTML = ":" + sec;
}

setInterval(clock, 1000);
