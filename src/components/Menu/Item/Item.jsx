import React from "react";
import ItemForm from "../ItemForm/ItemForm";
import "./item.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const Item = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <ItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Item;
