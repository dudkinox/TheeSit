const dotenv = require("dotenv");
const md5 = require("md5");
dotenv.config();

const firebase = require("../db");
const firestore = firebase.firestore();

const getLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashPassword = md5(password);

    const user = await firestore
      .collection("users")
      .where("username", "==", username)
      .where("password", "==", hashPassword)
      .get()
      .then((snapshot) => {
        return snapshot.docs[0].data();
      })
      .catch((err) => {
        return err;
      });
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  getLogin,
};
