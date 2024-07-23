import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Bed",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formDate = new FormData();
    formDate.append("name", data.name);
    formDate.append("description", data.description);
    formDate.append("price", Number(data.price));
    formDate.append("category", data.category);
    formDate.append("image", image);
    const response = await axios.post(`${url}/api/furniture/add`, formDate);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Bed",
      });
      setImage(false);
      toast.success(response.data.massage);
    } else {
      toast.error(response.data.massage);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.image_upload}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Bed">Bed</option>
              <option value="Sofa">Sofa</option>
              <option value="Wardrobe">Wardrobe</option>
              <option value="Altar">Altar</option>
              <option value="Wooden_ladder">Wooden_ladder</option>
              <option value="Kitchen_cabinets">Kitchen_cabinets</option>
              <option value="Dining_table">Dinging_table</option>
              <option value="Other_items">Other_items</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
