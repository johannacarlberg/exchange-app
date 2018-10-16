import { SET_TO_CURRENCY } from "./constants";
import { SET_FROM_CURRENCY } from "./constants";
import { SWAP_CURRENCIES } from "./constants";

const reducer = (state = '', action) => {
  switch (action.type) {
    case SET_TO_CURRENCY:
      return {
        ...state,
        toCurrency: action.payload
      }
    case SET_FROM_CURRENCY:
      return {
        ...state,
        fromCurrency: action.payload
      }
    case SWAP_CURRENCIES:
    return {
      ...state,
      fromCurrency: action.payload.to,
      toCurrency: action.payload.from
    }
    default:
      return state;
  }
};

export default reducer;