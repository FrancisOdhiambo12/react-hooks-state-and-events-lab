import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filterItems, setFilterItems ] = useState("Filter by category");

  function filterHandler(event){
    setFilterItems(event.target.value)
  }

const display = items.filter((item) => {
  if(filterItems === "Filter by category"){
    return true;
  } else {
    return item.category === filterItems;
  }
})

const itemList = display.map((item) => (
  <Item key={item.id} name={item.name} category={item.category} />
))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;