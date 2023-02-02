import { sendEmailConfirmation } from "../mail/index.js";
import User from "../models/User.js";

export const sendEmail = async (req, res) => {
  const { email, name, message, phone } = req.body;
  const user = new User({
    name,
    email,
    message,
    phone,
  });
  sendEmailConfirmation(email, name);

  try {
    await user.save();
  } catch (error) {
    console.log(error);
  }
  return res.status(201).json({ message: user });
};
