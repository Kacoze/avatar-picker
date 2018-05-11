import React from 'react';
import renderer from 'react-test-renderer';
import { AvatarListExample } from '../../utils/testData';
import ListContainer from './ListContainer';


it('renders without crashing and match snapshoot', () => {
  const tree = renderer
    .create(<ListContainer
      list={AvatarListExample}
      activeAvatar={2}
      loading
      handleAvatarChange={() => {}}
      handleActiveClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
