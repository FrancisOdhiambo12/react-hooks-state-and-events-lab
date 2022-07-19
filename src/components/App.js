import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

    // const appClass = false ? "App dark" : "App light"

  const [ darkColor, setDarkColor ] = useState(false);

  function changeColor() {
    setDarkColor((darkColor) => !darkColor)
  }

  return (
    <div className={darkColor ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeColor}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
