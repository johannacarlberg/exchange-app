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

console.log('store', store.getState());
export default store
