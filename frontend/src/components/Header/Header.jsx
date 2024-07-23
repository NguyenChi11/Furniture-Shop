import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite product here</h2>
        <p>
          Choose from a variety of products produced using modern technology and
          skilled artisans. Prices are moderate for everyone's income
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
