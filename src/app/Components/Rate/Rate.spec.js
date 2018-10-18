import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Rate from './Rate';

describe('Shallow rendering Rate component', () => {
  const mockStore = configureStore();
  let store;
  let container;

  const initialState = {
    from: 'GBP',
    to: 'EUR',
    rate: 1.2,
  };

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<Rate store={store} from="GBP" to="EUR" rate={1.2} />);
  });

  it('+++ render the connected(SMART) component', () => {
    expect(container.length).toEqual(1);
  });

  it('+++ check Prop matches with initialState', () => {
    expect(container.prop('from')).toEqual(initialState.from);
  });
});
