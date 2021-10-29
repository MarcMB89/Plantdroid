import React from 'react';
import {render} from '../../utils/test.utils';
import DataDetails from './Data-Details';

let navigation: any = {
  navigate: jest.fn(),
};

describe('Given a DataDetails Component', () => {
  describe('When it is rendered', () => {
    let screen: any;
    beforeEach(() => {
      screen = render(<DataDetails navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});

navigation = {navigation};
