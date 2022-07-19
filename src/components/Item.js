import React, { useState } from "react";

function Item({ name, category }) {

  const [ itemName, setItemName ] = useState(false);

  function addToCart() {
    setItemName((itemName) => !itemName);
  }

  return (
    <li className={itemName ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;

