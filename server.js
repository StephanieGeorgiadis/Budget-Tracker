const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/boiling-journey-54607";

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useFindAndModify: false,
  family: 4
};

mongoose.connect(MONGODB_URI, options);

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});