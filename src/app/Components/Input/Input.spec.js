import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input from './Input';

const onChangeMock = jest.fn();
const onKeyDownMock = jest.fn();

it('Snapshot - renders correctly', () => {
  const tree = renderer
    .create(<Input indicator="-" onChange={onChangeMock} onKeyDown={onKeyDownMock} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Input', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Input indicator="-" onChange={onChangeMock} onKeyDown={onKeyDownMock} />)
  });

  describe('Input Box', () => {
    it('should render component', () => {
      const inputProps = wrapper.find('Input').props();
      expect(inputProps.value).toBe('');
    });

    it('should call onChange on input', () => {
      const event = {
        preventDefault() {},
        target: { value: '123' },
      };
      wrapper.find('Input').simulate('change', event);
      expect(onChangeMock).toBeCalledWith(event);
    });
  });
});
