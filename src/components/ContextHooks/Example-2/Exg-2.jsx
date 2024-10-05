import Item from "./components/Item";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

const Context_Example_2 = () => {
  return (
    <div className="App">
      <CartProvider>
        <Item name="MacBook M1 Pro" price={112200} />
        <Item name="iPhone 14" price={79900} />
        <Item name="iPad Air" price={59900} />
        <Item name="Apple Watch Series 7" price={42900} />
        <Cart />
      </CartProvider>
    </div>
  );
};

export default Context_Example_2;
