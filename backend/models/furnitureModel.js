import mongoose from "mongoose";

const furnitureSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: String, require: true },
  category: { type: String, require: true },
});

const furnitureModel =
  mongoose.model.furniture || mongoose.model("furniture", furnitureSchema);

export default furnitureModel;
