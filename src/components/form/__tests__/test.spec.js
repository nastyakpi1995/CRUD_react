import React from 'react';
import renderer from 'react-test-renderer';
import CreatePeople from '../index';

it('renders correctly', () => {
  const component = renderer.create(<CreatePeople />).toJSON();

  expect(component).toMatchSnapshote;
});
