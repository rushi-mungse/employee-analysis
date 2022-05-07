const mongoose = require("mongoose");

const fillFormSchema = new mongoose.Schema(
  {
    jobKonwledge: { type: Number, required: true },
    problemSolvingAbility: { type: Number, required: true },
    productivity: { type: Number, required: true },
    communictionSkill: { type: Number, required: true },
    leadership: { type: Number, required: true },
    creativity: { type: Number, required: true },
    achievements: { type: Number, required: true },
    projects: { type: Number, required: true },
    userId: { type: String, required: true },
    isSubmited: { type: Boolean, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("FillForm", fillFormSchema);
