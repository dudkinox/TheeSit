const express = require("express");
const { sendEmail } = require("../controllers/emailController");
const { saveBase } = require("../controllers/saveController");
const { specs } = require("../controllers/specsController");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger");

const router = express.Router();

router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// send email
router.post("/send-email", sendEmail);
// save base
router.post("/save-base", saveBase);
router.post("/save-bases", specs);

module.exports = {
  routes: router,
};
