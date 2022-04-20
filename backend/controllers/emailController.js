"use strict";

const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const { EMAIL, PASSWORD_EMAIL } = process.env;

const sendEmail = async (req, res, next) => {
  try {
    const data = req.body;
    const verifyNumber = Math.floor(Math.random() * 1000) + 1;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: PASSWORD_EMAIL,
      },
    });

    var mailOptions = {
      from: EMAIL,
      to: data.email,
      subject: "ผลการประเมินสอบสัมภาษณ์  สำหรับนักศึกษา",
      html: "<center><h1>คะแนนที่ได้ : " + data.point + "</h1></center>",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(404).send(error);
      } else {
        return res.status(200).send("ส่งอีเมล์เรียบร้อยแล้ว");
      }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  sendEmail,
};
