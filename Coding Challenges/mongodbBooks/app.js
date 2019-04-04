var mongo = require("mongodb");
var fs = require("fs");

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

    fs.readFile("books.json", "utf8", (err, data) => {
      if (err) throw err;
      else {
        var objData = JSON.parse(data);
        console.log(typeof dat);
        DB.collection("books").insertMany(objData, function(error, result) {
          if (error) throw error;
        });
      }
    });
  }
});
