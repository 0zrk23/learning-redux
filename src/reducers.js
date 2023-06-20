import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE, TOGGLE_AMOUNT } from "./actions";
import cartItems from "./cart-items";

const initialStore = { cart: cartItems, total: 0, amount: 0};

// reducer
function reducer(state = initialStore, action){
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
        //maps through car for matching id, decreases item id, otherwise returns base item
        cart: state.cart.map((cartItem => cartItem.id === action.payload.id ? cartItem = {...cartItem,amount: cartItem.amount - 1} : cartItem)),
      };

    //increase reducer
    case INCREASE: 
      console.log('Amount Increased')
      return {
        ...state,
        //maps through car for matching id, decreases item id, otherwise returns base item
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
      //calculates total and amount totals using reduce
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
      //parses the total to a fixed decimal
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      }

    //toggle reducer
    case TOGGLE_AMOUNT:
      //logs which toggle is being used
      console.log(`Amount ${action.payload.toggle === 'inc' ? 'Increased' : 'Decreased'}`)
      // console.log(action.payload.toggle)
      //modifier either 1 or -1 based on the toggle
      const modifier = action.payload.toggle === 'inc' ? 1 : -1;
      // console.log()
      return {
        ...state,
        //maps through the cart. If cartItem matches payload id, changes item amount using modifier, otherwise returns base item
        cart: state.cart.map((cartItem => cartItem.id === action.payload.id ? {...cartItem, amount: cartItem.amount + modifier} : cartItem)),
      };

    //default return state
    default: 
      return state;
  }
}

export default reducer