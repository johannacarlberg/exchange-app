import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedSwap from './Swap';

describe('Swap ',()=>{
  const initialState = {
    from: {currency: 'GBP', balance: 40 },
    to: {currency: 'EUR', balance: 0 },
  };

  const mockStore = configureStore()
  let store,container

  beforeEach(()=>{
    store = mockStore(initialState)
    container = shallow(<ConnectedSwap store={store} /> )
  })

  it('render the component', () => {
    expect(container.length).toEqual(1)
  });

  it('prop matches with initialState', () => {
    expect(container.prop('output')).toEqual(initialState.output)
  });
});
