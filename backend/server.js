require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routers");

const dbConncet = require("./utils/database");
const handleErrors = require("./middlewares/ErrorHandle");

const options = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(options));
dbConncet();

app.use(express.json());
app.use("/api", router);
app.use(handleErrors);

const port = process.env.PORT || 5050;

app.listen(port, console.log(`Server listening on port ${port}`));
