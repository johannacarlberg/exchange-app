import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

it('renders correctly', () => {
  const onChange = jest.fn();
  const tree = renderer
    .create(<Input indicator="+" value="23" onChange={onChange} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
