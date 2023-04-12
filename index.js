const express = require("express");

var cors = require("cors");
const loginRoute = require("./frontend/login/login");
const mainRoute = require("./frontend/main/tech");
const reportRoute = require("./frontend/report/report");
const thankRoute = require("./frontend/thank/thank");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/frontend/login/", loginRoute);
app.use("/frontend/main/", mainRoute);
app.use("/frontend/report/", reportRoute);
app.use("/frontend/thank/", thankRoute);
module.exports = app;
