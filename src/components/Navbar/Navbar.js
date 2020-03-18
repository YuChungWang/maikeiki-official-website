import React, { PureComponent } from 'react';
import styles from './Navbar.module.scss';

class Navbar extends PureComponent {
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.logo} />
        </div>
      </>
    );
  }
}

export default Navbar;
