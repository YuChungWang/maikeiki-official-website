import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  handleOnClick = () => {
    const { simpleAction } = this.props;
    simpleAction('test redux action success!');
  };

  render() {
    const { text } = this.props;
    return (
      <div>
        <button type="button" onClick={this.handleOnClick}>
          Test redux action
        </button>
        <div>{text}</div>
      </div>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  simpleAction: PropTypes.func.isRequired,
};

export default Header;
