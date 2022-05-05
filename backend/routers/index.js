const authController = require("../controllers/authController");

const router = require("express").Router();

router.post("/authenticate", authController.authentication);

module.exports = router;
