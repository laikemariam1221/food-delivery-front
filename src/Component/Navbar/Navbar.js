import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from "react";
function Navbar({ setIsSignInOpen }) {
  // Initialize the state to manage the active item
  const [activeItem, setActiveItem] = useState("home");

  // Function to handle click event on list items and set the active item
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  const sininuphandler = () => {
    setIsSignInOpen(true);
  };

  return (
    <div className="container">
      <Link to="/">
        <img src={assets.logo} alt="" />
      </Link>
      <div className="listContainer">
        <ul>
          {/* Add onClick event handlers to set the active item */}
          <li
            onClick={() => handleItemClick("home")}
            className={activeItem === "home" ? "active" : ""}
          >
            home
          </li>

          <a href="#menu">
            {" "}
            <li
              onClick={() => handleItemClick("menu")}
              className={activeItem === "menu" ? "active" : ""}
            >
              menu
            </li>
          </a>

          <a href="#mobile">
            <li
              onClick={() => handleItemClick("mobile app")}
              className={activeItem === "mobile app" ? "active" : ""}
            >
              mobile app
            </li>
          </a>
          <a href="#footer">
            <li
              onClick={() => handleItemClick("contact us")}
              className={activeItem === "contact us" ? "active" : ""}
            >
              contact us
            </li>
          </a>
        </ul>
      </div>
      <div className="rightContainerlast">
        <div className="search-cart-container">
          <div className="searech">
            <img src={assets.search_icon} alt="" />
          </div>
          <Link to="/cart">
            <div id="basketBar" className="basketBar">
              <img src={assets.basket_icon} alt="" />
            </div>
          </Link>
        </div>

        <div className="sinInContainer">
          <button onClick={sininuphandler} className="signIn">
            sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
