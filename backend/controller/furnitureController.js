import furnitureModel from "../models/furnitureModel.js";

import fs from "fs";

// add furniture item

const addFurniture = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const furniture = new furnitureModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await furniture.save();
    res.json({ success: true, massage: "Furniture Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all furniture list
const listFurniture = async (req, res) => {
  try {
    const furniture = await furnitureModel.find({});
    res.json({ success: true, data: furniture });
  } catch (error) {
    console.log(error);
    res.json({ success: false, massage: "Error" });
  }
};

// remove furniture item

const removeFurniture = async (req, res) => {
  try {
    const furniture = await furnitureModel.findById(req.body.id);
    fs.unlink(`uploads/${furniture.image}`, () => {});

    await furnitureModel.findByIdAndDelete(req.body.id);
    res.json({
      success: true,
      message: "Furniture Removed",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFurniture, listFurniture, removeFurniture };
