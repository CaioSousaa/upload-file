const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://mongo:12345@uploadfiles.szoddex.mongodb.net/?retryWrites=true&w=majority&appName=UploadFiles"
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(3333);
