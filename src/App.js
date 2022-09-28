import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";
import CartProvider from "./store/cart-provider";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const showCartHandler = () => setCartShown(true);
  const hideCartHandler = () => setCartShown(false);
  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
