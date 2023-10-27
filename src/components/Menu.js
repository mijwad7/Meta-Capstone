// Menu.js
import React from "react";
import menu from "../data";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Menu</h2>
      <div className="menu-container">
        {menu.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Type: {item.type}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
