import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import router from "./routes/contactRoutes"

// Intiallizing app
const app = express();

// Connecting database
mongoose.connect("mongodb://localhost/clientdb");

mongoose.connection.once("open", () => {
  console.log("MongoDB connection established succesfully.");
});

mongoose.connection.on("err", () => {
  console.log(err);
});

// Middelware
app.use(bodyParser.json());
app.use(cors());

app.use("/", router);

// Start server
app.listen(4000, () => console.log("App started at 4000..."));
