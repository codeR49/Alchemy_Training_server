"use strict";
const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const userRoutes = require("./routes/userRoutes");
const trainingRoutes = require("./routes/trainingRoutes");

const port = process.env.PORT || 8080;
require("./db/database")();

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoutes);
app.use("/training", trainingRoutes);

app.listen(port, () =>
  console.log(`server is listening on url http://localhost:${port}`)
);
