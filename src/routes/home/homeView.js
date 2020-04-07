import React, { PureComponent } from 'react';

import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import PropTypes from 'prop-types';
import SliderSection from 'components/SliderSection/SliderSection';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './homeView.module.scss';

class homeView extends PureComponent {
  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler = () => {
    const { setNavbar } = this.props;
    if (window.scrollY > 160) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <SliderSection />
        <div className={styles['banner-section']}>
          <Logo className={styles.logo} />
          <h1 className={styles['text-slogan']}>
            handmade, flavorful &amp; healthy
          </h1>
          <h1 className={styles['text-slogan']}>for new lifestyle</h1>
          <h3 className={styles['text-sub-slogan']}>make life sweeter</h3>
        </div>
        <div className={styles['about-section']}>
          <Fade>
            <h3 className={styles['text-about']}>
              從小小廚房創作出來的手工甜點，紀錄味覺與視覺兼併的美好
            </h3>
            <h3 className={styles['text-about']}>—</h3>
            <h3 className={styles['text-about']}>Keiki 為日文「蛋糕」音譯</h3>
            <h3 className={styles['text-about']}>
              Mai Keiki 你可以解釋為賣蛋糕/美味(うまい)蛋糕/不客氣 都行
            </h3>
            <Link to="/about" className={styles['route-section']}>
              <FontAwesomeIcon
                icon={faChevronRight}
                color="#a0775d"
                className={styles['icon-arrow']}
              />
              <h3 className={styles['text-route']}>關於 Mai Keiki</h3>
            </Link>
          </Fade>
        </div>
        <div className={styles['news-section']}>
          <h1 className={styles['text-news']}>最新消息</h1>
        </div>
        <div className={styles.empty} />
      </div>
    );
  }
}

homeView.propTypes = {
  setNavbar: PropTypes.func.isRequired,
};

export default homeView;
