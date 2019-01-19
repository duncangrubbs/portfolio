/**
 * @file ProjectCard.js
 * @description ProjectCard component for the site.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React, { Component } from 'react';
import propTypes from 'prop-types';

class ProjectCard extends Component {
  render() {
    return (
      <div className="projectcard" id={this.props._id}>
        <div className="projectcard__title">{this.props.title}</div>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  _id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default ProjectCard;