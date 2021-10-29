import React from 'react';
import {render} from '../../utils/test.utils';
import Register from './Register';

let navigation: any = {
  navigate: jest.fn(),
};

describe('Given a Register Component', () => {
  describe('When it is rendered', () => {
    let screen: any;
    beforeEach(() => {
      screen = render(<Register navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});

navigation = {navigation};
