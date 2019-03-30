/**
 * @file WorkCard.js
 * @description WorkCard component for the site.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React, { Component } from 'react';
import propTypes from 'prop-types';

class WorkCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="workcard">
        <div className="workcard__title">{this.props.title}</div>
        <div className="workcard__content">
          BarterOut is a web application that focuses on making peer-to-peer
          used textbook transactions easier. For the last year, I have worked
          in a small team building the client-side of the site, as well as the
          API (backend) infrastructure.
        </div>
      </div>
    );
  }
}

WorkCard.propTypes = {
  title: propTypes.string.isRequired,
};

export default WorkCard;