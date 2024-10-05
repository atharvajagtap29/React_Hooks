import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);
  const totalBill = cart.items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h1>My Cart</h1>
      {cart.items.length > 0 ? (
        <ul>
          {cart.items.map((item, index) => (
            <li key={index} style={{ fontStyle: "italic", fontWeight: "500" }}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h5>Total Bill: ${totalBill}</h5>
    </div>
  );
};

export default Cart;
