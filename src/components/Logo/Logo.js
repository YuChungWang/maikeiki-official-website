import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Logo.module.scss';

class Logo extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div
        className={classnames(styles.logo, {
          [className]: !!className,
        })}
      />
    );
  }
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
