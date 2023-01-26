import express from "express";
import getDesign from "../controllers/Design-controllers.js";

const designRouter = express.Router();

designRouter.get("/design", getDesign);

export default designRouter;
