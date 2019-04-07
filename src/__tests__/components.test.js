import React from 'react';
import { shallow } from 'enzyme';

import WorkCard from '../components/WorkCard';
import NavBar from '../components/NavBar';
import ScrollTracker from '../components/ScrollTracker';

describe('components', () => {
  it('should render', () => {
    shallow(<WorkCard title="sample" />);
  });

  it('should render', () => {
    shallow(<NavBar />);
  });

  it('should render', () => {
    shallow(<ScrollTracker />);
  });
});