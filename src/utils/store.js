import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
  from: {
    currency: 'GBP',
    balance: 40,
  },
  to: {
    currency: 'EUR',
    balance: 0,
  },
  statement: {
    EUR: 0,
    GBP: 40,
    USD: 0,
  },
};

const store = createStore(
  reducer,
  initialState,
);

store.subscribe(() => {
  store.getState();
});

export default store;
