import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

it('Snapshot - renders correctly', () => {
  const onChange = jest.fn();
  const tree = renderer
    .create(<Input indicator="-" onChange={onChange} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
