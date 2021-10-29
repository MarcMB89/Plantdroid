import React from 'react';
import {render} from '../../utils/test.utils';
import Login from './Login';

let navigation: any = {
  navigate: jest.fn(),
};

describe('Given a Login Component', () => {
  describe('When it is rendered', () => {
    let screen: any;
    beforeEach(() => {
      screen = render(<Login navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});

navigation = {navigation};
