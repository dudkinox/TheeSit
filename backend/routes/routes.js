const express = require("express");
const { sendEmail } = require("../controllers/emailController");
const { saveBase, getAllData } = require("../controllers/saveController");
const { getLogin } = require("../controllers/loginController");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger");

const router = express.Router();

router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// send email
router.post("/send-email", sendEmail);
// save base
router.get("/all-data", getAllData);
router.post("/save-base", saveBase);
// login
router.post("/login", getLogin);

module.exports = {
  routes: router,
};
