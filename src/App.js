import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer';

class App extends Component {
  render() {
    console.warn(this.props);
    return (
      <div className="App">
        <HeaderContainer />
      </div>
    );
  }
}

export default App;
