const { ValidationError } = require("joi");

const handleErrors = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: "Internal server error",
    ...(process.env.DEBUG_MOD == "true" && { originalError: err.message }),
  };

  if (err instanceof ValidationError) {
    statusCode = 422;
    data = {
      message: err.message,
    };
  }
  return res.status(statusCode).json(data);
};

module.exports = handleErrors;
