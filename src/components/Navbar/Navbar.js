import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { PureComponent } from 'react';

import About from 'routes/about/aboutView';
import Home from 'routes/home/homeView';
import IngredientsView from 'routes/ingredients/ingredientsView';
import OrderInfo from 'routes/orderInfo/orderInfoView';
import Products from 'routes/products/productsView';
import classnames from 'classnames';
import styles from './Navbar.module.scss';

class Navbar extends PureComponent {
  render() {
    return (
      <Router>
        <div className={styles.container}>
          <div className={styles['main-section']}>
            <div className={styles['logo-section']}>
              <Link to="/">
                <div className={styles.logo} />
              </Link>
            </div>
            <Link to="/about" className={styles['route-text']}>
              關於Mai Keiki
            </Link>
            <Link to="/products" className={styles['route-text']}>
              所有產品
            </Link>
            <Link to="/ingredients" className={styles['route-text']}>
              食材使用
            </Link>
            <Link to="/order-info" className={styles['route-text']}>
              訂購需知
            </Link>
          </div>
          <div className={styles['third-part-link-section']}>
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
