require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import { itemRouter } from "./Routes/items";

const app = express();
app.use(express.json());
app.use(itemRouter);

const MONGO_URI = process.env.MONGO_URI || "";
mongoose.connect(MONGO_URI, {}, () => console.log("Database Connected"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
