import { ADD_COUNTER,DEC_COUNTER, RESET_COUNTER } from "../actions/actions.types";

const initalState = {
  amount: 0,
  name: "Deepak"
};

const countReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        amount: action.count
      };
    case DEC_COUNTER:
      return {
        amount: action.count
      };
    case RESET_COUNTER:
      return {
        amount: action.count
      };
    default:
      return state;
  }
};

export default countReducer;
