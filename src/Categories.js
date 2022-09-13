import React from "react";

function Categories({ filterMenu }) {
  return (
    <div>
      <div className="btn-container">
        <button className="menu-btn" onClick={() => filterMenu("all")}>
          All
        </button>
        <button
          className="breakfast-btn"
          onClick={() => filterMenu("breakfast")}
        >
          Breakfast
        </button>
      </div>
    </div>
  );
}

export default Categories;
