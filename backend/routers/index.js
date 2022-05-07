const authController = require("../controllers/authController");
const fillFormController = require("../controllers/fillFormController");

const router = require("express").Router();

router.post("/authenticate", authController.authentication);
router.post("/store-employee-form", fillFormController.fillForm);

module.exports = router;
