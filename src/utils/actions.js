import {SET_TO_CURRENCY, SET_FROM_CURRENCY, SWAP_CURRENCIES } from './constants';

export const setToCurrency = currency => ({
  type: SET_TO_CURRENCY,
  payload: currency
});

export const setFromCurrency = fromCurrency => ({
  type: SET_FROM_CURRENCY,
  payload: fromCurrency
});

export const swapCurrencies = currencies => ({
  type: SWAP_CURRENCIES,
  payload: currencies
});
