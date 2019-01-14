import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import Polarization from '../routes/writing/Polarization';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Polarization />
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});