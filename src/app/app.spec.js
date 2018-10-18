import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './app';

describe('Shallow rendering Rate component', () => {
  const mockStore = configureStore();
  let store;
  let container;

  const initialState = {};

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<App store={store} />);
  });

  it('render the Rate component', () => {
    expect(container.length).toEqual(1);
  });

  it('Check that Prop matches with initialState', () => {
    expect(container.prop('output')).toEqual(initialState.output);
  });
});
