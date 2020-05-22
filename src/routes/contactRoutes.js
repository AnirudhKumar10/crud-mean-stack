import express from "express";
import Client from "../models/client";

const router = express.Router();

router.route("/clients").get((req, res) => {
  Client.find({}, (err, clients) => {
    if (err) {
      console.log(err);
    } else {
      res.json(clients);
    }
  });
});

router.route("/clients/:id").get((req, res) => {
  Client.findById(req.params.id, (err, client) => {
    if (err) {
      console.log(err);
    } else {
      res.json(client);
    }
  });
});

router.route("/clients/add").post((req, res) => {
  let client = new Client(req.body);
  client
    .save()
    .then((client) => {
      res.status(200).json({ client: "Successfully Added" });
    })
    .catch((err) => {
      res.status(400).send("Failed to Insert Record");
    });
});

router.route("/clients/update/:id").put((req, res) => {
  Client.findById(req.params.id, (err, client) => {
    if (err) res.send(err);
    else {
      client.name = req.body.name;
      client.email = req.body.email;
      client.balance = req.body.balance;

      client
        .save()
        .then((client) => {
          res.status(200).json({ client: "Successfully Updated" });
        })
        .catch((err) => {
          res.status(400).send("Failed to Update Record");
        });
    }
  });
});

router.route("/clients/remove/:id").delete((req, res) => {
  Client.findByIdAndRemove({ _id: req.params.id }, (err, client) => {
    if (err) res.send(err);
    else res.json("Record Deleted Successfully");
  });
});

export default router;
