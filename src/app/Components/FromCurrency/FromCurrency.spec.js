import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { FromCurrencyConnected } from './FromCurrency';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    setFromCurrency: jest.fn(),
    setToCurrency: jest.fn(),
    setFromValue: jest.fn(),
    setToValue: jest.fn(),
  };

  const enzymeWrapper = mount(<FromCurrencyConnected {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('From Currency', () => {
  describe('Input', () => {
    it('should render component and props', () => {
      const { enzymeWrapper } = setup();
      const inputProps = enzymeWrapper.find('input').props();
      expect(inputProps.value).toBe('');
    });

    it('should update fromValue when input is valid', () => {
      const { enzymeWrapper, props } = setup();
      const inputProps = enzymeWrapper.find('input').props();
      inputProps.onChange({target: {value: '123'}});
      expect(props.setFromValue.mock.calls.length).toBe(1);
    });

    it('should update fromValue when input is with decimals', () => {
      const { enzymeWrapper, props } = setup();
      const inputProps = enzymeWrapper.find('input').props();
      inputProps.onChange({target: {value: '0.1'}});
      expect(props.setFromValue.mock.calls.length).toBe(1);
    });

    it('should NOT update fromValue when input is invalid', () => {
      const { enzymeWrapper, props } = setup();
      const inputProps = enzymeWrapper.find('input').props();
      inputProps.onChange({target: {value: 'abc'}});
      expect(props.setFromValue.mock.calls.length).toBe(0);
    });

    it('should NOT update fromValue when input is a sign', () => {
      const { enzymeWrapper, props } = setup();
      const inputProps = enzymeWrapper.find('input').props();
      inputProps.onChange({target: {value: '-'}});
      expect(props.setFromValue.mock.calls.length).toBe(0);
    });
  });
});
