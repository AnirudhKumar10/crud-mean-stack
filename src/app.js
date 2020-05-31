import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import router from "./routes/contactRoutes";

// Intiallizing app
const app = express();

// Connecting database
const url = "YOUR MONGODB URL"
mongoose.connect(url);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection established succesfully.");
});

mongoose.connection.on("err", () => {
  console.log(err);
});

const port = process.env.PORT || 4000;

// Middelware
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../public")));

//home route
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use("/", router);

// Start server
app.listen(port, () => console.log(`App started at ${port}`));
