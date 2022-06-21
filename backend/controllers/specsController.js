const dotenv = require("dotenv");
dotenv.config();

const specs = async (req, res, next) => {
  try {
    return res.status(200).send("insert success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  specs,
};
