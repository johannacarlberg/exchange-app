import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
  fromCurrency: 'GBP',
  fromBalance: 40,
  toCurrency: 'EUR',
  toBalance: 0,
};

const store = createStore(
  reducer,
  initialState
)

store.subscribe(() => {
  store.getState()
})

export default store
