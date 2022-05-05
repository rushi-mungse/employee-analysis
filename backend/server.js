const express = require("express");
const app = express();

const port = process.env.PORT || 5050;

app.listen(port, console.log(`Server listening on port ${port}`));
