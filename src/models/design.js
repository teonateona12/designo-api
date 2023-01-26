import mongoose from "mongoose";

const { Schema } = mongoose;

const designSchema = new Schema({
  id: { type: Number },
  category: { type: String },
  text: { type: String },
  items: [
    {
      name: { type: String },
      description: { type: String },
      image: { type: String },
    },
  ],
});

const Design = mongoose.model("Design", designSchema);

export default Design;
