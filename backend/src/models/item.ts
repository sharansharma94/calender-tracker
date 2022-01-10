import mongoose from "mongoose";

interface Item {
  title: string;
  description: string;
  time: Date;
  estimatedDuration: number;
  actualDuration: number;
  checked: boolean;
}
const itemSchema = new mongoose.Schema<Item>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: Date, required: true },
  estimatedDuration: { type: Number },
  actualDuration: { type: Number },
  checked: { type: Boolean, required: true },
});

const ItemModel = mongoose.model<Item>("Item", itemSchema);

const buildModel = (model: Item) => {
  return new ItemModel(model);
};

export { buildModel, ItemModel };
