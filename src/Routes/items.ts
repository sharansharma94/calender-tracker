import express from "express";
const router = express.Router();

router.get("/api/items", (req, res) => {
  return res.send("all items");
});

export { router as itemRouter };
