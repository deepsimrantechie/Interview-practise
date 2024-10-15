import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../model/usermodel.js";
//login
const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = Createtoken(user._id);
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid credentials." });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//register
const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exists." });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email.",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a password greater than 8 characters.",
      });
    }

    return res.json({
      success: true,
      message: "User registered successfully.",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginuser, RegisterUser };
