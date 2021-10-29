import React from 'react';
import {render} from '../../utils/test.utils';
import FavoriteList from './Favorite-List';

let navigation: any = {
  navigate: jest.fn(),
};

describe('Given a FavoriteList Component', () => {
  describe('When it is rendered', () => {
    let screen: any;
    beforeEach(() => {
      screen = render(<FavoriteList navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});