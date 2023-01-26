import mongoose from "mongoose";

const connection = () => {
  try {
    return mongoose.connect(
      "mongodb+srv://teonateona12:teonateona12@cluster0.ij8jwvq.mongodb.net/designo"
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default connection;
