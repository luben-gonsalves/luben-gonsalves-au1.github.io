var express = require("express");
var mongo = require("mongodb");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Create the DB connection
var DB;

// Create a Mongo client
var mongoClient = new mongo.MongoClient("mongodb://localhost:27017/bookApp", {
  useNewUrlParser: true
});

mongoClient.connect(function(error) {
  if (error) {
    console.log("Error connecting to the database.");
  } else {
    console.log("DB connection established.");
    DB = mongoClient.db("bookApp");
  }
});

var booksData = [];
languages = [];

app.get("/", (req, res) => {
  var data = {
    books: booksData,
    languages: languages
  };
  res.render("index.hbs", data);
});

app.post("/", (req, res) => {
  // to get all the books data from our db
  DB.collection("books")
    .find({})
    .toArray(function(error, books) {
      if (error) {
        console.log("error occurred while connecting to book collection");
      }
      booksData.length = 0;
      //   loop through books data for a particular language
      for (i = 0; i < books.length; i++) {
        if (books[i].language == req.body.input) {
          booksData.push(books[i]);
        }
      }
      res.redirect("/");
    });
});

app.listen(3000, () => {
  console.log("app has been started at port 3000");
});
