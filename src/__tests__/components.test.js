import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../components/NavBar';
import ScrollTracker from '../components/ScrollTracker';

describe('components', () => {
  it('should render', () => {
    shallow(<NavBar />);
  });

  it('should render', () => {
    shallow(<ScrollTracker />);
  });
});