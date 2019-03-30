/**
 * @file ScrollTracker.js
 * @description ScrollTracker component for the site.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React, { Component } from 'react';

class ScrollTracker extends Component {
  componentDidMount() {
    const scrollTracker = document.getElementById('scroll-tracker');
    
    document.addEventListener('scroll', (evt) => {
      const limit = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight, 
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const diff = limit - document.documentElement.clientHeight;
      const diffPercent = diff / limit;
      const percent = evt.target.scrollingElement.scrollTop / (limit * diffPercent);
      const pixCalc = (document.documentElement.clientWidth) * percent;
      scrollTracker.style.width = `${pixCalc}px`;
    });
  }

  render() {
    return (
      <div id="scroll-tracker" />
    );
  }
}

export default ScrollTracker;