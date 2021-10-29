import React from 'react';
import {render} from '../../utils/test.utils';
import Dashboard from './Dashboard';

let navigation: any = {
  navigate: jest.fn(),
};

describe('Given a Dashboard Component', () => {
  describe('When it is rendered', () => {
    let screen: any;
    beforeEach(() => {
      screen = render(<Dashboard navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});


