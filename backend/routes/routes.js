const express = require("express");
const { sendEmail } = require("../controllers/emailController");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger");

const router = express.Router();

router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// login
router.get("/send-email", sendEmail);

module.exports = {
  routes: router,
};
