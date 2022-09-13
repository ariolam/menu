import React from "react";

function Categories({ filterMenu, category }) {
  return (
    <div>
      <div className="btn-container">
        {category.map((category, index) => {
          return (
            <button
              className="menu-btn"
              onClick={() => filterMenu(category)}
              key={index}
              type="button"
            >
              {" "}
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
