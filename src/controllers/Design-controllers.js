import Design from "../models/design.js";

const getDesign = async (req, res) => {
  const allDesigns = await Design.find();
  res.status(200).json(allDesigns);
};
export default getDesign;
