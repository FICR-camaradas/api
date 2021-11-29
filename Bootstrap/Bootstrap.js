import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Routes from "../Routes/Index.js";
import mongoose from "mongoose"

dotenv.config();

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOCONNECTION_STRING, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json())
app.use(cors());
app.set("json spaces", 4);

app.use("/api", Routes);

export default app;
