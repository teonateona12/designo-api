import express from "express";
import connection from "./config/mongo.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import designRouter from "./routes/design-router.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

const app = express();
dotenv.config();
connection();

app.use(bodyParser.json());
app.use(cors());

app.use("/designo", express.static("public/designo"));

app.use("/api", designRouter);
app.use("/", ...swaggerMiddleware);

app.listen(5000);
