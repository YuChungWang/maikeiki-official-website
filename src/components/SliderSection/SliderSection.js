import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { PureComponent } from 'react';

import Slider from 'react-slick';
import classnames from 'classnames';
import styles from './SliderSection.module.scss';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const sliderArr = [1, 2, 3, 4, 5, 6];

class SliderSection extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Slider {...settings}>
          {sliderArr.map(num => (
            <div key={num}>
              <div
                className={classnames(
                  styles['bg-slider'],
                  styles[`bg-slider-${num}`],
                )}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SliderSection;
