import React, { PureComponent } from 'react';
import classnames from 'classnames';
import styles from './Navbar.module.scss';

class Navbar extends PureComponent {
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles['main-section']}>
            <div className={styles['logo-section']}>
              <div className={styles.logo} />
            </div>
            <div className={styles['route-text']}>關於Mai Keiki</div>
            <div className={styles['route-text']}>所有產品</div>
            <div className={styles['route-text']}>食材使用</div>
            <div className={styles['route-text']}>訂購需知</div>
          </div>
          <div className={styles['third-part-link-section']}>
            <div className={classnames(styles.icon, styles['icon-facebook'])} />
            <div
              className={classnames(styles.icon, styles['icon-instagram'])}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
