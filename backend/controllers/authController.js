const Joi = require("joi");
const JwtService = require("../services/JwtService");
const User = require("../models/User");
class AuthController {
  async authentication(req, res, next) {
    const { email, password } = req.body;

    const userCredentialSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .min(3)
        .max(30)
        .pattern(RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });

    const { error } = userCredentialSchema.validate(req.body);
    if (error) return next(error);

    let user;
    try {
      user = await User.findOne({ email, password });
      if (!user) return res.json("Username or Password wrong. ");
    } catch (error) {
      return res.json("Internal Server Error.");
    }

    const access_token = await JwtService.signJwt({ _id: user._id });
    const refresh_token = await JwtService.signJwt(
      { _id: user._id },
      process.env.REFRESH_JWT_TOKEN,
      "1y"
    );

    return res.json({ user, auth: true });
  }
}

module.exports = new AuthController();
