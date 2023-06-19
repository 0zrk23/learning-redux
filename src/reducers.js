import { DECREASE, INCREASE } from "./actions";

// reducer
function reducer(state, action){
  console.log({state,action});
  switch(action.type){
    //decrease count
    case DECREASE:
      return {
        ...state,
        count: state.count -1,
      };
    //increase count
    case INCREASE:
      return {
        ...state,
        count: state.count +1,
      }
    default: 
      return state;
  }
}

export default reducer