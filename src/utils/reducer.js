import { SET_TO_CURRENCY } from './constants';
import { SET_TO_BALANCE } from './constants';
import { SET_FROM_CURRENCY } from './constants';
import { SET_FROM_VALUE} from './constants';
import { SET_TO_VALUE} from './constants';
import { SET_FROM_BALANCE } from './constants';
import { SWAP_CURRENCIES } from './constants';

const reducer = (state = '', action) => {
  switch (action.type) {
    case SET_TO_CURRENCY:
      return {
        ...state,
        toCurrency: action.payload
      }
    case SET_TO_BALANCE:
      return {
        ...state,
        toBalance: action.payload
      }
    case SET_FROM_CURRENCY:
      return {
        ...state,
        fromCurrency: action.payload
      }
    case SET_FROM_VALUE:
      return {
        ...state,
        fromValue: action.payload
      }
    case SET_TO_VALUE:
      return {
        ...state,
        toValue: action.payload
      }
    case SET_FROM_BALANCE:
      return {
        ...state,
        fromBalance: action.payload
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