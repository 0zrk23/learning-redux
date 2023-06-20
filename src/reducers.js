import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE } from "./actions";

// reducer
function reducer(state, action){
  // console.log({state,action});
  switch(action.type){
    //clear cart reducer
    case CLEAR_CART:{
      return{
        ...state,
        cart: [],
      }
    }

    //decrease reducer
    case DECREASE: 
      console.log('Amount Decreased')
      return {
        ...state,
        cart: state.cart.map((cartItem => cartItem.id === action.payload.id ? cartItem = {...cartItem,amount: cartItem.amount - 1} : cartItem)),
      };

    //increase reducer
    case INCREASE: 
      console.log('Amount Increased')
      return {
        ...state,
        cart: state.cart.map((cartItem => cartItem.id === action.payload.id ? cartItem = {...cartItem,amount: cartItem.amount + 1} : cartItem)),
      };

    //remove item reducer
    case REMOVE: 
      console.log('Item Removed')
      // console.log(action.payload.id)
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id),
      };
    
    //get the totals reducer
    case GET_TOTALS:
      //uses reduce method to calculate the total and amount and destructures it
      let {total, amount} = state.cart.reduce(
          (cartTotal,cartItem)=>{
          const {price, amount} = cartItem;
          cartTotal.total += price * amount
          cartTotal.amount += amount;
          return cartTotal;
        },{
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      }
    //default return state
    default: 
      return state;
  }
}

export default reducer