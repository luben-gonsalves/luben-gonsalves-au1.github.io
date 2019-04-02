const express = require("express");

const app = new express();

app.set("view engine", "hbs");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

var newContact = [
  {
    name: "luben",
    number: "1237822189"
  }
];

app.get("/", (req, res) => {
  var data = {
    contact: newContact
  };
  res.render("index.hbs", data);
});

app.post("/", (req, res) => {
  var name = req.body.name;
  var number = req.body.number;
  var data = {
    name: name,
    number: number
  };
  newContact.push(data);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("app has been started at port 3000");
});
