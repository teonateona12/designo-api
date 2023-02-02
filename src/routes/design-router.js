import express from "express";
import getDesign from "../controllers/Design-controllers.js";
import { sendEmail } from "../controllers/sendEmailGreeting.js";

const designRouter = express.Router();

designRouter.get("/design", getDesign);
designRouter.post("/email", sendEmail);

export default designRouter;
