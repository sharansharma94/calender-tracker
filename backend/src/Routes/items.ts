import express from "express";
import { buildModel, ItemModel } from "../models/item";
const router = express.Router();

router.get("/api/items", async (req, res) => {
  const allItems = await ItemModel.find({});
  return res.status(200).send(allItems);
});

router.post("/api/item", async (req, res) => {
  const { title, description, time, estimatedDuration } = req.body;

  const item = buildModel({
    title,
    description,
    time,
    estimatedDuration,
    actualDuration: 0,
    checked: false,
  });

  await item.save();
  return res.status(201).send(item);
});

export { router as itemRouter };
