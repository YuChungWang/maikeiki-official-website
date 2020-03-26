import React, { Component } from 'react';

import Logo from 'components/Logo/Logo';
import SliderSection from 'components/SliderSection/SliderSection';
import styles from './homeView.module.scss';

class aboutView extends Component {
  render() {
    return (
      <div className={styles.container}>
        <SliderSection />
        <div className={styles['banner-section']}>
          <Logo className={styles.logo} />
          <h1 className={styles.slogan}>handmade, flavorful &amp; healthy</h1>
          <h1 className={styles.slogan}>for new lifestyle</h1>
        </div>
        <div className={styles.empty} />
      </div>
    );
  }
}

export default aboutView;
