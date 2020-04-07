import 'normalize.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AboutView from 'routes/about/aboutView';
import Footer from 'components/Footer/Footer';
import HomeViewContainer from 'routes/home/homeViewContainer';
import IngredientsView from 'routes/ingredients/ingredientsView';
import Navbar from 'components/Navbar/Navbar';
import OrderInfoView from 'routes/orderInfo/orderInfoView';
import ProductsView from 'routes/products/productsView';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomeViewContainer />
            </Route>
            <Route path="/about">
              <AboutView />
            </Route>
            <Route path="/products">
              <ProductsView />
            </Route>
            <Route path="/ingredients">
              <IngredientsView />
            </Route>
            <Route path="/order-info">
              <OrderInfoView />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
