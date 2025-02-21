const express = require("express");
const path = require("path");
const app = express();

// ejs
app.set("view engine", "ejs");
app.set("views".path.join(__dirname, "views"));

// public
app.use(express.static(path.join(__dirname, "public")));

// routes
const indexRouter = require("./routes/routes");
app.use("/", indexRouter);

module.exports = app;
