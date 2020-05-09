/**
 * @file WorkCard.js
 * @description WorkCard component for the site.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React, { Component } from 'react';
import propTypes from 'prop-types';

class WorkCard extends Component {
  render() {
    return (
      <div className="workcard">
        <div className="workcard__title">{this.props.title}</div>
        <div className="workcard__content">
          {this.props.text}
        </div>
      </div>
    );
  }
}

WorkCard.propTypes = {
  text: propTypes.string.isRequired,
  title: propTypes.string.isRequired
  
};

export default WorkCard;