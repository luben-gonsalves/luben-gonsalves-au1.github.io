// External packages
var express = require("express");
var mongoDb = require("mongodb");
var bodyParser = require("body-parser");

// express application
var app = express();

// use body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// using handlebars as view engine
app.set("view engine", "hbs");

// The db connection
var DB;

var mongoClient = new mongoDb.MongoClient("mongodb://localhost:27017/users", {
  useNewUrlParser: true
});

mongoClient.connect(err => {
  if (err) console.log("Error connecting to MongoDb");
  else {
    console.log("Connected to mongoDb database");
  }
  DB = mongoClient.db("users");
});

// Get Methods
// signup route-get request
app.get("/signUp", (req, res) => {
  var failed = req.query.failed;
  var emailTaken = req.query.emailTaken;

  //   if signUp fails  set the flag to true
  if (failed == "true") {
    var data = {
      failed: true
    };
    return res.render("signUp.hbs", data);
  }

  //   if mail is taken set the flag to true
  if (emailTaken == "true") {
    var data = {
      emailTaken: true
    };
    return res.render("signUp.hbs", data);
  }

  res.render("signUp.hbs");
});

//login route->get Request
app.get("/login", (req, res) => {
  var success = req.query.success;
  var wrongCred = req.query.wrongCred;

  //   if credentials are true  set the flag to true
  if (success == "true") {
    var data = {
      success: true
    };
    return res.render("login.hbs", data);
  }

  //   if wrong credentials  set the flag to true
  if (wrongCred == "true") {
    var data = {
      wrongCred: true
    };
    console.log("entered wrongCredentials");
    return res.render("login.hbs", data);
  }
  res.render("login.hbs");
});

// Post Methods
//signUp route-->Post method
app.post("/signUp", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  var userData = {
    name: name,
    email: email,
    password: password
  };

  DB.collection("credentials")
    .find({})
    .toArray((err, data) => {
      if (err) {
        console.log("couldnt fetch the data");
      } else {
        //to check if the mail exists
        for (i = 0; i < data.length; i++) {
          if (email == data[i].email) {
            return res.redirect("/signUp/?emailTaken=true");
          }
        }
        //if the mail doesnt exists insert data into db
        DB.collection("credentials").insertOne(userData, (err, result) => {
          if (err) {
            console.log("sign up failed");
            return res.redirect("/SignUp/?failed=true");
          } else {
            console.log("SignUp successful");
            return res.redirect("/login/?success=true");
          }
        });
      }
    });
});

//login route->post method
app.post("/login", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  //   insert login data into mongodb
  DB.collection("credentials")
    .find({})
    .toArray((err, data) => {
      if (err) {
        console.log("couldnt fetch the data");
      } else {
        for (i = 0; i < data.length; i++) {
          if (email == data[i].email && password == data[i].password) {
            return res.send("Login successful");
          }
        }
        return res.redirect("/login/?wrongCred=true");
      }
    });
});

app.listen(3000, () => {
  console.log("app has been started at port 3000");
});
