// express required, installed express handlebars, installed mysql, installed express created variables for necessary dependencies
const express = require("express")
var exphbs = require("express-handlebars");

var app = express();
// var path = require ("path")

var PORT = process.env.PORT || 7000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(express.static(path.join (__dirname + '/public')));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

var routes = require("./controllers/tacosController");

app.use(routes);


  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("We are in!")
  });
  