const express = require("express");
const { sendEmail } = require("../controllers/emailController");
const { saveBase } = require("../controllers/saveController");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger");

const router = express.Router();

router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// send email
router.post("/send-email", sendEmail);
// save base
router.get("/save-base", saveBase);

module.exports = {
  routes: router,
};
