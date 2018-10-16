import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
  fromCurrency: 'GBP',
  toCurrency: 'EUR'
};

const store = createStore(
  reducer,
  initialState
)

store.subscribe(() => {
  store.getState()
})

export default store
