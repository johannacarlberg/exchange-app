import React from 'react';
import Input from './Input';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const onChange = jest.fn();
  const tree = renderer
    .create(<Input indicator="+" value='23' onChange={onChange}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
