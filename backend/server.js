require("dotenv").config();
const express = require("express");
const app = express();

const dbConncet = require("./utils/database");

dbConncet();
const port = process.env.PORT || 5050;

app.listen(port, console.log(`Server listening on port ${port}`));
