const jwt = require("jsonwebtoken");

class JwtService {
  static async signJwt(
    payload,
    secret = process.env.ACCESS_TOKEN_SECRET,
    expiry = "1m"
  ) {
    return await jwt.sign(payload, secret, { expiresIn: expiry });
  }

  static async verifyJwt(payload, secret = process.env.ACCESS_TOKEN_SECRET) {
    return await jwt.verify(payload, secret);
  }
}

module.exports = JwtService;
