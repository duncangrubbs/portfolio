/**
 * @file WritingCard.js
 * @description WritingCard component for the site.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React, { Component } from 'react';
import propTypes from 'prop-types';

class WritingCard extends Component {
  componentDidMount() {
    console.log(this.props); // eslint-disable-line
  }

  render() {
    return (
      <div className="writingcard">
        <div className="writingcard__title">The Role of Radicals</div>
        <div className="writingcard__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    );
  }
}

WritingCard.propTypes = {
  src: propTypes.string.isRequired,
};

export default WritingCard;