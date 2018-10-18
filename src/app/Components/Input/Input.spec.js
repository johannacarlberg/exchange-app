import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Input from './Input';

it('Snapshot - renders correctly', () => {
  const onChange = jest.fn();
  const tree = renderer
    .create(<Input indicator="+" value="23" onChange={onChange} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
