import express from "express";
import {
  addFurniture,
  listFurniture,
  removeFurniture,
} from "../controller/furnitureController.js";
import multer from "multer";

const furnitureRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

furnitureRouter.post("/add", upload.single("image"), addFurniture);
furnitureRouter.get("/list", listFurniture);
furnitureRouter.post("/remove", removeFurniture);

export default furnitureRouter;
