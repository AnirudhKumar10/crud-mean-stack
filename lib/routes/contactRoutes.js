"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _client = require("../models/client");

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route("/clients").get(function (req, res) {
  _client2.default.find({}, function (err, clients) {
    if (err) {
      console.log(err);
    } else {
      res.json(clients);
    }
  });
});

router.route("/clients/:id").get(function (req, res) {
  _client2.default.findById(req.params.id, function (err, client) {
    if (err) {
      console.log(err);
    } else {
      res.json(client);
    }
  });
});

router.route("/clients/add").post(function (req, res) {
  var client = new _client2.default(req.body);
  client.save().then(function (client) {
    res.status(200).json({ client: "Successfully Added" });
  }).catch(function (err) {
    res.status(400).send("Failed to Insert Record");
  });
});

router.route("/clients/update/:id").put(function (req, res) {
  _client2.default.findById(req.params.id, function (err, client) {
    if (err) res.send(err);else {
      client.name = req.body.name;
      client.email = req.body.email;
      client.balance = req.body.balance;

      client.save().then(function (client) {
        res.status(200).json({ client: "Successfully Updated" });
      }).catch(function (err) {
        res.status(400).send("Failed to Update Record");
      });
    }
  });
});

router.route("/clients/remove/:id").delete(function (req, res) {
  _client2.default.findByIdAndRemove({ _id: req.params.id }, function (err, client) {
    if (err) res.send(err);else res.json("Record Deleted Successfully");
  });
});

exports.default = router;