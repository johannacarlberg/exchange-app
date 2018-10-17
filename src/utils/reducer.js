import * as constants from './constants';

const reducer = (state = '', action) => {
  switch (action.type) {
    case constants.SET_RATE:
      return {
        ...state,
        rate: action.payload
      }
    case constants.SET_TO_CURRENCY:
      return {
        ...state,
        toCurrency: action.payload
      }
    case constants.SET_TO_BALANCE:
      return {
        ...state,
        toBalance: action.payload
      }
    case constants.SET_FROM_CURRENCY:
      return {
        ...state,
        fromCurrency: action.payload
      }
    case constants.SET_FROM_VALUE:
      return {
        ...state,
        fromValue: action.payload
      }
    case constants.SET_TO_VALUE:
      return {
        ...state,
        toValue: action.payload
      }
    case constants.SET_FROM_BALANCE:
      return {
        ...state,
        fromBalance: action.payload
      }
    case constants.SWAP_CURRENCIES:
      return {
      ...state,
      fromCurrency: action.payload.to,
      toCurrency: action.payload.from
    }
    case constants.SWAP_BALANCES:
      return {
        ...state,
        fromBalance: action.payload.to,
        toBalance: action.payload.from
      }
    case constants.SWAP_VALUES:
      return {
        ...state,
        fromValue: action.payload.to,
        toValue: action.payload.from
      }
    case constants.UPDATE_FROM_BALANCE:
      return {
        ...state,
        fromBalance: action.payload.from - action.payload.to,
      }
    case constants.UPDATE_TO_BALANCE:
      return {
        ...state,
        toBalance: action.payload.from + action.payload.to,
      }
    default:
      return state;
  }
};

export default reducer;
