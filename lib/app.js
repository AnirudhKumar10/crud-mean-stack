"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _contactRoutes = require("./routes/contactRoutes");

var _contactRoutes2 = _interopRequireDefault(_contactRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Intiallizing app
var app = (0, _express2.default)();

// Connecting database
_mongoose2.default.connect("mongodb://localhost/clientdb");

_mongoose2.default.connection.once("open", function () {
  console.log("MongoDB connection established succesfully.");
});

_mongoose2.default.connection.on("err", function () {
  console.log(err);
});

// Middelware
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

app.use("/", _contactRoutes2.default);

// Start server
app.listen(4000, function () {
  return console.log("App started at 4000...");
});