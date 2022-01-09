import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "../.env" });

import express from "express";
import { itemRouter } from "./Routes/items";

const app = express();
app.use(express.json());
app.use(itemRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
