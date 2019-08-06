"use strict";
var updateContent = function(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].state == "Maharashtra" || data[i].state == "Gujarat") {
      console.log(data[i].name);
    }
  }
};

var cities=[];

var loadContent = function() {
  // Create an ajax object
  var request = new XMLHttpRequest();

  // Open a connect to a URL
  request.open("get", "cities.json");

  // Send the request to the server resource.
  request.send();

  // Receive the data and do some thing with it.
  request.onreadystatechange = function(data) {
    if (request.readyState == 4 && request.status == 200) {
      var jsonData = JSON.parse(request.responseText);
      updateContent(jsonData);
    }
  };
};

loadContent();

cities=[];
var letter(letter){
	for(i=0;i<cities.length;i++){
	if(cities[i]["name"][0]==letter){
	cities.["name"]
	
}
