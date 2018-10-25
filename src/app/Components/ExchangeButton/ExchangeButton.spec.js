import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store'
import { ConnectedExchangeButton } from './ExchangeButton';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
let store;
const initialState1 = {
  from: {
    currency: 'GBP',
    balance: 40,
  },
  to: {
    currency: 'EUR',
    balance: 0,
  },
  fromValue: '9',
};

const setup = () => {
  const props = {
    updateFromBalance: jest.fn(),
    updateToBalance: jest.fn(),
    updateStatement: jest.fn(),
  };
  store = mockStore(initialState1);
  const enzymeWrapper = mount(<ConnectedExchangeButton {...props} store={store} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('ExchangeButton', () => {
  describe('disabled', () => {
    it('should render component', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('button').text()).toBe('Exchange');
      const buttonProps = enzymeWrapper.find('button').props();
      expect(buttonProps.disabled).toBe(true);
    });

    it('should NOT call updateFromBalance if clicked when disabled', () => {
      const { enzymeWrapper, props } = setup();
      const button = enzymeWrapper.find('button');
      button.simulate('click', { preventDefault() {} });
      expect(props.updateFromBalance.mock.calls.length).toBe(0);
    });
  });
});
