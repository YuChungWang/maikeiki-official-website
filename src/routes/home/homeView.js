import React, { Component } from 'react';

import SliderSection from 'components/SliderSection/SliderSection';
import styles from './homeView.module.scss';

class aboutView extends Component {
  render() {
    return (
      <div className={styles.container}>
        <SliderSection />
      </div>
    );
  }
}

export default aboutView;
