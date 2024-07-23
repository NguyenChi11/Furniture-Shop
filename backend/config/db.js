import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://NguyenChi_furniture:Nvc181120@cluster0.2ys2wyy.mongodb.net/furniture-del"
    )
    .then(() => console.log("DB Connected"));
};
