/**
 * @file index.js
 * @description Wrapper for react.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// CSS
import './css/main.css';
import './css/components.css';
import './css/mobile.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
