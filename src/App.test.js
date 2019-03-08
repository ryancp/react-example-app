import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const component = shallow(<App />);

describe('<App />', () => {
  test('renders as expected', () => {
    expect(component.find(App)).toBeTruthy();
  });
});
