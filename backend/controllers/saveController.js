const dotenv = require("dotenv");
dotenv.config();

const firebase = require("../db");
const firestore = firebase.firestore();

const saveBase = async (req, res, next) => {
  try {
    await firestore.collection("data").set({
      id: req.params.id,
      name: req.body.name,
      major: req.body.major,
      sum: req.body.sum,
    });

    return res.status(200).send("success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  saveBase,
};
