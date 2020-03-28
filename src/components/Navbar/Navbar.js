import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { PureComponent } from 'react';

import About from 'routes/about/aboutView';
import Home from 'routes/home/homeView';
import IngredientsView from 'routes/ingredients/ingredientsView';
import OrderInfo from 'routes/orderInfo/orderInfoView';
import Products from 'routes/products/productsView';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Navbar.module.scss';

const BtnMenu = ({ handleMenuBtnClick, isShowUpNav }) => (
  <div
    role="button"
    tabIndex={0}
    className={classnames(styles['btn-menu'], {
      [styles['is-show-up-nav']]: isShowUpNav,
    })}
    onClick={handleMenuBtnClick}
  >
    menu
  </div>
);

BtnMenu.propTypes = {
  handleMenuBtnClick: PropTypes.func.isRequired,
  isShowUpNav: PropTypes.bool,
};

BtnMenu.defaultProps = {
  isShowUpNav: false,
};

const ShowUpNav = ({ handleMenuBtnClick }) => (
  <>
    <BtnMenu handleMenuBtnClick={handleMenuBtnClick} isShowUpNav />
    <Link
      to="/"
      className={classnames(styles['route-text'], styles['route-home'])}
    >
      首頁
    </Link>
    <Link
      to="/about"
      className={classnames(styles['route-text'], styles['route-about'])}
    >
      關於Mai Keiki
    </Link>
    <Link
      to="/products"
      className={classnames(styles['route-text'], styles['route-products'])}
    >
      所有產品
    </Link>
    <Link
      to="/ingredients"
      className={classnames(styles['route-text'], styles['route-ingredients'])}
    >
      食材使用
    </Link>
    <Link
      to="/order-info"
      className={classnames(styles['route-text'], styles['route-order-info'])}
    >
      訂購需知
    </Link>
  </>
);

ShowUpNav.propTypes = {
  handleMenuBtnClick: PropTypes.func.isRequired,
};

class Navbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  handleMenuBtnClick = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow,
    }));
  };

  render() {
    const { isShow } = this.state;
    return (
      <Router>
        <div className={styles.container}>
          <div className={styles['main-section']}>
            <BtnMenu handleMenuBtnClick={this.handleMenuBtnClick} />
            <div className={styles['text-site']}>
              Mai Keiki official website
            </div>
          </div>
          <div className={styles['follow-us-section']}>
            <div className={styles['text-follow-us']}>follow us</div>
            <div className={styles['third-part-link-section']}>
              <a
                aria-label="instagram-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/maikeiki/"
              >
                <div
                  className={classnames(styles.icon, styles['icon-instagram'])}
                />
              </a>
              <a
                aria-label="facebook-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/maikeiki/"
              >
                <div
                  className={classnames(styles.icon, styles['icon-facebook'])}
                />
              </a>
            </div>
          </div>
          <div
            className={classnames(styles['show-up-nav'], {
              [styles['is-show']]: isShow,
              [styles['is-hide']]: !isShow,
            })}
          >
            <ShowUpNav handleMenuBtnClick={this.handleMenuBtnClick} />
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/ingredients">
            <IngredientsView />
          </Route>
          <Route path="/order-info">
            <OrderInfo />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Navbar;
