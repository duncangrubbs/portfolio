import React from 'react';
import { shallow } from 'enzyme';

import ProjectCard from '../components/ProjectCard';
import WritingCard from '../components/WritingCard';
import NavBar from '../components/NavBar';

describe('components', () => {
  // it('should render', () => {
  //   shallow(<ProjectCard _id="Test" title="Test" />);
  // });
  
  it('should render', () => {
    shallow(<WritingCard />);
  });
  
  it('should render', () => {
    shallow(<NavBar />);
  });
});