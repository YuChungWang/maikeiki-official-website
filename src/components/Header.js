import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { type } = this.props;
    console.warn(type);
    return <div>`${type}`</div>;
  }
}

Header.propTypes = {
  type: PropTypes.bool.isRequired,
};

export default Header;
