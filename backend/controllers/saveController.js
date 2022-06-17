"use strict";

const dotenv = require("dotenv");
dotenv.config();

const saveBase = async (req, res, next) => {
  try {
    const { user } = req;
    const { id } = user;

    const baseSaved = await Base.findOne({ where: { id } });

    return res.status(200).send("บันทึก สำเร็จ");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  saveBase,
};
