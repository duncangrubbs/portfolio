/**
 * @file ScrollTracker.js
 * @description Shows the scroll depth percentage as a bar on
 * top of the screen.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.3
 */

import React, { Component } from 'react';

class ScrollTracker extends Component {
  componentDidMount() {
    const self = document.getElementById('scroll-tracker');
    
    document.addEventListener('scroll', (evt) => {
      const limit = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight, 
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      // Do some math
      const diff = limit - document.documentElement.clientHeight;
      const diffPercent = diff / limit;
      const percent = evt.target.scrollingElement.scrollTop / (limit * diffPercent);
      const pixCalc = (document.documentElement.clientWidth) * percent;

      // Update the width
      self.style.width = `${pixCalc}px`;
    });
  }

  render() {
    return (
      <div id="scroll-tracker" />
    );
  }
}

export default ScrollTracker;