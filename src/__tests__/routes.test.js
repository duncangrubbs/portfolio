import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

import App from '../App';
import Home from '../routes/Home';
import Portfolio from '../routes/Portfolio';
import BarterOut from '../routes/portfolio/BarterOut';
import LetsGo from '../routes/portfolio/LetsGo';
import Hack4Health from '../routes/portfolio/Hack4Health';
import Polarization from '../routes/writing/Polarization';

describe('route components render', () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });

  it('Home renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('Polarization renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Polarization />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Portfolio renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('BarterOut renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <BarterOut />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('LetsGo renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <LetsGo />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Hack4Health renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Hack4Health />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
