import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p className="footer-content-p">
            We invite you to explore our online store and discover the exquisite
            craftsmanship that goes into each piece of our wooden furniture. Our
            commitment to quality and customer satisfaction means you can shop
            with confidence, knowing you're investing in items that will bring
            warmth and elegance to your home for years to come. Thank you for
            choosing our Wooden Furniture Shop – where tradition meets
            innovation. Happy shopping!
          </p>
          <div className="footer-social-icons">
            <span>
              <a
                href="https://www.facebook.com/chinguyen181120"
                target="_blank"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/tala_chis/" target="_blank">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </span>
            <span>
              <a href="" target="_blank">
                <i class="fa-brands fa-telegram"></i>
              </a>
            </span>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <p>
              liên hệ với tôi:
              <a className="contact-style" href="tel:+84981303677">
                {" "}
                0981303677
              </a>
            </p>
            <p>
              contact:
              <a
                className="contact-style"
                href="mailto:chinguyen280200@gmail.com"
              >
                {" "}
                chinguyen280200@gmail.com
              </a>
            </p>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024! ViHi.com - All for one</p>
    </div>
  );
};
export default Footer;
