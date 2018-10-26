import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import { ConnectedExchangeButton } from './ExchangeButton';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
let store;
const initialState = {
  from: {
    currency: 'GBP',
    balance: 40,
  },
  to: {
    currency: 'EUR',
    balance: 0,
  },
};

const props = {
  updateFromBalance: jest.fn(),
  updateToBalance: jest.fn(),
  updateStatement: jest.fn(),
};

const setup = () => {
  store = mockStore(initialState);
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
      const { enzymeWrapper } = setup();
      const button = enzymeWrapper.find('button');
      button.simulate('click', { preventDefault() {} });
      expect(props.updateFromBalance.mock.calls.length).toBe(0);
    });
  });

  describe('testing disabled/enabled', () => {
    let wrapper;
    it('button should be disabled when input is lower than 0.1', () => {
      wrapper = mount(<ConnectedExchangeButton {...props} store={store} fromValue="0.01" />);
      const button = wrapper.find('button');
      expect(button.props().disabled).toBe(true);
      button.simulate('click', { preventDefault() {} });
      expect(props.updateFromBalance.mock.calls.length).toBe(0);
    });

    it('button should be disabled when input is more than balance', () => {
      wrapper = mount(<ConnectedExchangeButton {...props} store={store} fromValue="50" />);
      const button = wrapper.find('button');
      expect(button.props().disabled).toBe(true);
    });

    it('button should NOT be disabled when input is wihtin balance', () => {
      wrapper = mount(<ConnectedExchangeButton {...props} store={store} fromValue="12" />);
      const button = wrapper.find('button');
      expect(button.props().disabled).toBe(false);
      button.simulate('click', { preventDefault() {} });
      expect(props.updateFromBalance.mock.calls.length).toBe(1);
    });

  });
});
