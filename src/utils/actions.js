import {UPDATE_TO_BALANCE, UPDATE_FROM_BALANCE, SET_RATE, SET_TO_CURRENCY, SET_FROM_CURRENCY, SET_TO_BALANCE, SET_FROM_VALUE, SET_TO_VALUE, SET_FROM_BALANCE, SWAP_CURRENCIES, SWAP_BALANCES, SWAP_VALUES } from './constants';

export const setRate = rate => ({
  type: SET_RATE,
  payload: rate
});

export const setToCurrency = currency => ({
  type: SET_TO_CURRENCY,
  payload: currency
});

export const setFromCurrency = currency => ({
  type: SET_FROM_CURRENCY,
  payload: currency
});

export const setToBalance = balance => ({
  type: SET_TO_BALANCE,
  payload: balance
});

export const setFromBalance = balance => ({
  type: SET_FROM_BALANCE,
  payload: balance
});

export const setFromValue = value => ({
  type: SET_FROM_VALUE,
  payload: value
});

export const setToValue = value => ({
  type: SET_TO_VALUE,
  payload: value
});

export const swapCurrencies = currencies => ({
  type: SWAP_CURRENCIES,
  payload: currencies
});

export const updateFromBalance = balances => ({
  type: UPDATE_FROM_BALANCE,
  payload: balances
});


export const updateToBalance = balances => ({
  type: UPDATE_TO_BALANCE,
  payload: balances
});

export const swapBalances = balances => ({
  type: SWAP_BALANCES,
  payload: balances
});

export const swapValues = values => ({
  type: SWAP_VALUES,
  payload: values
});
