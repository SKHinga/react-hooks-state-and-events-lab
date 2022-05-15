import React, { useState } from "react";

function Item({ name, category }) {
  const [inside, setInside] = useState(true)

  function handleInside(){
    setInside((turnt) => !turnt);
  }

  const running = inside ? "" : "in-cart"
  const ruin = inside ? "add" : "remove"
  return (
    <li className={running}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={ruin} onClick={handleInside}>{inside ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
