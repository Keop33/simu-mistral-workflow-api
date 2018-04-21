var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./public/routes/workflowRoutes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(process.env.PORT || 3000, () =>
  console.log("app running on port.", server.address().port)
);
