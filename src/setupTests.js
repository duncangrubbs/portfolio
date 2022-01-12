/**
 * @file setupTests.js
 * @description Sets up enzyme adapter for tests.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.5
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
