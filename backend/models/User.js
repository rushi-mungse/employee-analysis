const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchama = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, default: "rushikesh" },
    role: { type: String, default: "employee" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchama);
