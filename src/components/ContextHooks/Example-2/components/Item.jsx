import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = (props) => {
  const cart = useContext(CartContext);
  console.log("Your cart::::", cart);

  const addNewItem = () => {
    cart.setItems((prevItems) => [
      ...prevItems,
      { name: props.name, price: props.price }, // 2nd parameter is to add a new item to the cart.
    ]);
  };

  return (
    <div className="item-card">
      <h2>{props.name}</h2>
      <h6>${props.price}</h6>
      <button style={{ marginBottom: "35px" }} onClick={addNewItem}>
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
