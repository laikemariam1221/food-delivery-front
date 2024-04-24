import React, { useState } from "react";
import "./MenuLIst.css";
import { menu_list } from "../../assets/assets";

function MenuList({ catagory, setCatagory }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setCatagory((prev) => (prev === image.menu_name ? "All" : image.menu_name));
    setSelectedImage(image.menu_name);
  };

  return (
    <div className="menuList" id="menu">
      <h1>Explore our menu</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta
        magni quod! Aliquam quam officiis impedit, ipsam sequi labore! Autem
        modi est natus dolorum alias necessitatibus ipsum tenetur ullam dolores?
      </p>
      <div className="menuImgList">
        {menu_list.map((image, index) => (
          <div
            key={index}
            onClick={() => handleClick(image)}
            className={`menuItem ${catagory === image.menu_name ? "active" : ""}`}
          >
            <img
              className={`menuImage ${selectedImage === image.menu_name ? "redBorder" : ""}`}
              src={image.menu_image}
              alt={image.title}
            />
            <p>{image.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
