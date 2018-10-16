import {SWAP_CURRENCIES } from './constants';

export const swapCurrencies = currencies => ({
  type: SWAP_CURRENCIES,
  payload: currencies
});
