import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  const cartClass = inCart? 'in-cart' : ''
  const btnText = inCart? 'Remove From Cart' : 'Add to Cart'

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=>setCart(!inCart)}>{btnText}</button>
    </li>
  );
}

export default Item;
