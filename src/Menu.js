import React from "react";

function Menu({ menu }) {
  return (
    <div>
      <div>
        <h3>{menu.title}</h3>
        <p>{menu.desc}</p>
        <p>{menu.price}</p>
        <img src={menu.img} alt={menu.title} width="300" />
      </div>
    </div>
  );
}

export default Menu;
