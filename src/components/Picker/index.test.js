import React from 'react';
import renderer from 'react-test-renderer';
import { AvatarListExample } from '../../utils/testData';
import Picker from './index';

it('renders without crashing and match snapshoot', () => {
  const tree = renderer
    .create(<Picker list={AvatarListExample} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
