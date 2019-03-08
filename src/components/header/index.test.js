import React from 'react';
import { shallow } from 'enzyme';
import AppBar from '@material-ui/core/AppBar';

import Header from './index';

const component = shallow(<Header />);

describe('<Header />', () => {
  test('renders as expected', () => {
    expect(component.find(AppBar)).toBeTruthy();
  });
});
