import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="firstH1">Order your favourite food hear</h1>
        <h2 className="secondH2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad vitae at
          cupiditate atque alias, similique vel ipsa doloremque ea cumque
          veritatis corporis autem voluptate rem pariatur asperiores tempore.
          Odit, quos!
        </h2>
        <div className="headerButton">
          <button> Views Menu</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
