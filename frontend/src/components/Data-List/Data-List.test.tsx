import React from 'react';
import {render} from '../../utils/test.utils';
import DataList from './Data-List';

let navigation: any = {
  navigate: jest.fn(),
};

describe('Given a DataList Component', () => {
  describe('When it is rendered', () => {
    let screen: any;
    beforeEach(() => {
      screen = render(<DataList navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});

navigation = {navigation};
