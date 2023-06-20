import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
// redux stuff

// console.log(cartItems.length)
//initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}

//store setup
const store = createStore(reducer,initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
