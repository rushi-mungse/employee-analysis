const FillForm = require("../models/FillForm");
const User = require("../models/User");

class FillFormController {
  async fillForm(req, res, next) {
    const {
      jobKonwledge,
      problemSolvingAbility,
      productivity,
      communictionSkill,
      leadership,
      creativity,
      achievements,
      projects,
      userId,
      isSubmited,
    } = req.body.data;

    try {
      const newForm = new FillForm({
        jobKonwledge,
        problemSolvingAbility,
        productivity,
        communictionSkill,
        leadership,
        creativity,
        achievements,
        projects,
        userId,
        isSubmited,
      });
      newForm.save();
    } catch (error) {
      console.log(error);
      return res.json("same internal error");
    }

    const user = await User.findOne({ _id: userId });
    // const newUser = new User({
    //   ...user,
    //   isFilled: true,
    // });
    // newUser.save();
    // console.log(newUser);
    return res.json({ user, isFilled: true });
  }
}

module.exports = new FillFormController();
