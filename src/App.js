import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import { createStore } from "redux";
import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducers";
// redux stuff

//initial store
const initialStore = {
  count: 0,
  name: 'john'
}

//store setup
const store = createStore(reducer,initialStore);

// reducer(10,'DECREASE');

//using dispatch
store.dispatch({type: DECREASE});
// store.dispatch({type: 'DECREASE'});

store.dispatch({type: INCREASE});
store.dispatch({type: INCREASE});

console.log(store.getState());


function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
