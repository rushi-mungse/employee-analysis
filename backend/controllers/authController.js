const Joi = require("joi");

class AuthController {
  async authentication(req, res, next) {
    const { email, password } = req.body;

    const userCredentialSchema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string()
        .min(3)
        .max(30)
        .pattern(RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });

    const { error } = userCredentialSchema.validate(req.body);
    if (error) return next(error);

    return res.json({ isAuth: "ok" });
  }
}

module.exports = new AuthController();
