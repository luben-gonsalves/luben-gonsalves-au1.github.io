var mongoDb = require("mongodb");
var fs = require("fs");

// Create a Mongo client
var mongoClient = new mongoDb.MongoClient("mongodb://localhost:27017/bookApp", {
  useNewUrlParser: true
});

mongoClient.connect(err => {
  if (err) {
    console.log("error connecting to mongoDb");
  } else {
    var DB;
    console.log("connected to database");
    DB = mongoClient.db("bookApp");

    //Find all the books data
    DB.collection("books")
      .find({})
      .toArray((err, books) => {
        if (err) throw err;
        var sData = JSON.stringify(books);
        // Store the books data to file
        fs.writeFile("books.json", sData, "utf8", err => {
          if (err) throw err;
          console.log("file has been saved");
        });
      });
  }
});
