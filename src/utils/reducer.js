import * as constants from './constants';

const reducer = (state = '', action) => {
  switch (action.type) {
    case constants.SET_RATE:
      return {
        ...state,
        rate: action.payload,
      };
    case constants.SET_TO_CURRENCY:
      return {
        ...state,
        to: {
          ...state.to,
          currency: action.payload.currency,
          balance: action.payload.balance,
        },
      };
    case constants.SET_TO_BALANCE:
      return {
        ...state,
        toBalance: action.payload,
      };
    case constants.SET_FROM_CURRENCY:
      return {
        ...state,
        from: {
          ...state.from,
          currency: action.payload.currency,
          balance: action.payload.balance,
        },
      };
    case constants.SET_FROM_VALUE:
      return {
        ...state,
        fromValue: action.payload,
      };
    case constants.SET_TO_VALUE:
      return {
        ...state,
        toValue: action.payload,
      };
    case constants.SET_FROM_BALANCE:
      return {
        ...state,
        fromBalance: action.payload,
      };
    case constants.SWAP_CURRENCIES:
      return {
        ...state,
        to: {
          ...state.to,
          currency: action.payload.from.currency,
          balance: action.payload.from.balance,
        },
        from: {
          ...state.from,
          currency: action.payload.to.currency,
          balance: action.payload.to.balance,
        },
      };
    case constants.UPDATE_FROM_BALANCE:
      return {
        ...state,
        from: {
          ...state.from,
          balance: action.payload.fromBalance,
        },
      };
    case constants.UPDATE_TO_BALANCE:
      return {
        ...state,
        to: {
          ...state.to,
          balance: action.payload.toBalance,
        },
      };
    case constants.UPDATE_STATEMENT:
      return {
        ...state,
        statement: {
          ...state.statement,
          [action.payload.fromCurrency]: action.payload.fromBalance,
          [action.payload.toCurrency]: action.payload.toBalance,
        },
      };
    default:
      return state;
  }
};

export default reducer;
