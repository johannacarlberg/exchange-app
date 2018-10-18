import * as constants from './constants';

export const setRate = rate => ({
  type: constants.SET_RATE,
  payload: rate
});

export const setToCurrency = currency => ({
  type: constants.SET_TO_CURRENCY,
  payload: currency
});

export const setFromCurrency = currency => ({
  type: constants.SET_FROM_CURRENCY,
  payload: currency
});

export const setFromValue = value => ({
  type: constants.SET_FROM_VALUE,
  payload: value
});

export const setToValue = value => ({
  type: constants.SET_TO_VALUE,
  payload: value
});

export const swapCurrencies = currencies => ({
  type: constants.SWAP_CURRENCIES,
  payload: currencies
});

export const updateFromBalance = balances => ({
  type: constants.UPDATE_FROM_BALANCE,
  payload: balances
});

export const updateToBalance = balances => ({
  type: constants.UPDATE_TO_BALANCE,
  payload: balances
});
