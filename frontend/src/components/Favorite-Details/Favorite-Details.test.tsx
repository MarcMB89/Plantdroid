import React from 'react';
import {render} from '../../utils/test.utils';
import FavoriteDetails from './Favorite-Details';

let navigation: any = {
  navigate: jest.fn(),
};

describe('Given a FavoriteDetails Component', () => {
  describe('When it is rendered', () => {
    let screen: any;
    beforeEach(() => {
      screen = render(<FavoriteDetails navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});


