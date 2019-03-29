"use strict";

var inputButton = document.getElementById("inputButton");

var updateContent = contentData => {
  var tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  for (var i = 0; i < contentData.length; i++) {
    var tr = document.createElement("tr");
    tbody.appendChild(tr);

    var tdAuthor = document.createElement("td");
    tr.appendChild(tdAuthor);
    tdAuthor.innerText = contentData[i].author;

    var tdCountry = document.createElement("td");
    tr.appendChild(tdCountry);
    tdCountry.innerText = contentData[i].country;

    var tdLink = document.createElement("td");
    tr.appendChild(tdLink);
    tdLink.innerText = contentData[i].link;

    var tdPages = document.createElement("td");
    tr.appendChild(tdPages);
    tdPages.innerText = contentData[i].pages;

    var tdTitle = document.createElement("td");
    tr.appendChild(tdTitle);
    tdTitle.innerText = contentData[i].title;

    var tdYear = document.createElement("td");
    tr.appendChild(tdYear);
    tdYear.innerText = contentData[i].year;
  }
};

var searchFunc = data => {
  var content = [];
  var inputText = document.getElementById("inputText").value;
  for (var i = 0; i < data.length; i++) {
    if (inputText == data[i].language) {
      content.push(data[i]);
    }
  }
  updateContent(content);
};

var ajaxFunc = () => {
  var request = new XMLHttpRequest();
  request.open("get", "books.json");
  request.send();
  request.onreadystatechange = data => {
    if (request.readyState == 4 && request.status == 200) {
      var jsonData = JSON.parse(request.responseText);
      searchFunc(jsonData);
    }
  };
};
inputButton.addEventListener("click", ajaxFunc);
