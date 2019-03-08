import React from 'react';
import { shallow } from 'enzyme';
import GridList from '@material-ui/core/GridList';

import TeamList from './list';

const component = shallow(<TeamList />);

describe('<TeamList />', () => {
  test('renders correctly', () => {
    expect(component.find(GridList)).toBeTruthy();
  });

  // TODO: test error state
  // TODO: test loading state
});
