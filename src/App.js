import Menu from "./Menu";
import "./App.css";
import { useState } from "react";
import data from "./data";
import Categories from "./Categories";

function App() {
  const [menu, setMenu] = useState(data);

  const filterMenu = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const categoryMenu = data.filter((item) => item.category === category);
    setMenu(categoryMenu);
  };

  return (
    <div className="App">
      <h2> Our Menu</h2>
      <div className="underline"></div>
      <Categories filterMenu={filterMenu} />
      <ul>
        {" "}
        {menu.map((menu) => {
          return <Menu key={menu.id} menu={menu} />;
        })}
      </ul>
    </div>
  );
}

export default App;
