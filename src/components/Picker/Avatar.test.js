import React from 'react';
import renderer from 'react-test-renderer';
import { AvatarExample } from '../../utils/testData';
import Avatar from './Avatar';

it('renders without crashing and match snapshoot', () => {
  const tree = renderer
    .create(<Avatar
      image={AvatarExample}
      onAction={() => {}}
      loading={false}
      id="test"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
