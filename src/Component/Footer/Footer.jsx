import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {
  return (
   <div>
     <div className="footer-container" id="footer">
      <div className="one-container">
        <img src={assets.logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia
          dolorem cupiditate. Optio rerum assumenda quibusdam nulla beatae
          minima, officiis fugiat aspernatur earum nihil sunt deserunt velit
          animi, voluptatem eligendi?
        </p>
        <div className="footer-social">
          <ul>
            <li>
              <a href="">
                {" "}
                <img src={assets.facebook_icon} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src={assets.linkedin_icon} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src={assets.twitter_icon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="two-container">
        <h1 className="footer-h1">company</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Delivery</a>
          </li>
          <li>
            <a href="">Privacy policy</a>
          </li>
        </ul>
      </div>
      <div className="three-container">
        <h1 className="footer-lasr">GET IN TOUCH</h1>
        <p>+251 923502678</p>
        <p>contact@gmail.com</p>
      </div>
      
    </div>
    <div className="last-footer">
      <hr />
      <p>Copywrite 2024@ tomato.com allright reserved</p>
    </div>
   </div>
  );
}

export default Footer;
