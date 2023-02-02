import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  phone: { type: Number },
  email: { type: String },
  message: { type: String },
});

const User = mongoose.model("User", userSchema);

export default User;
