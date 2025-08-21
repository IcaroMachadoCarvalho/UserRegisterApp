const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;     

const generateToken = (userId, username) => {
  const payload = {
    id: userId,
    username: username,
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};

module.exports = generateToken;
