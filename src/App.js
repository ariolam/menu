import Menu from "./Menu";
import "./App.css";
import { useState } from "react";
import data from "./data";

function App() {
  const [menu, setMenu] = useState(data);

  function showMenu(item) {
    setMenu();
  }

  return (
    <div className="App">
      <h2> Our Menu</h2>
      <div className="underline"></div>
      <button className="menu-btn" onClick={showMenu}>
        {" "}
        All{" "}
      </button>
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
