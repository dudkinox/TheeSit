const dotenv = require("dotenv");
dotenv.config();

const firebase = require("../db");
const firestore = firebase.firestore();

const saveBase = async (req, res, next) => {
  try {
    const base = req.body;
    const data = await firestore
      .collection("data")
      .add(base)
      .then((doc) => {
        return doc.id;
      });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const getAllData = async (req, res, next) => {
  try {
    const data = await firestore
      .collection("data")
      .get()
      .then((snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          data.push(doc.data());
        });
        return data;
      });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  saveBase,
  getAllData,
};
