import React, { useContext } from "react";
import "./ProductItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const ProductItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="product-item">
      <div className="product-item-img-container">
        <img
          className="product-item-image"
          src={url + "/image/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <i className="add fa-solid fa-plus" onClick={() => addToCart(id)} />
        ) : (
          <div className="product-item-counter">
            <i
              onClick={() => removeFromCart(id)}
              className="fa-solid fa-circle-minus"
            ></i>
            <p>{cartItems[id]}</p>
            <i
              onClick={() => addToCart(id)}
              className="fa-solid fa-circle-plus"
            ></i>
          </div>
        )}
      </div>
      <div className="product-item-info">
        <div className="product-item-name-rating">
          <p>{name}</p>
          {/* <img src={assets.rating_starts} alt="" /> */}
          <div className="rating_starts">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <p className="product-item-desc">{description}</p>
        <p className="product-item-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
