const { jwtSecret, jwtExpiry } = require("../config");
const jwt = require("jsonwebtoken");

const issueAuth = payload => {
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiry });
};

const verifyAuth = (token, cb) => jwt.verify(token, jwtSecret, {}, cb);

module.exports = { issueAuth, verifyAuth };
