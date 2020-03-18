import React, { Component } from 'react';
import Navbar from 'components/Navbar/Navbar';
import Slider from 'components/Slider/Slider';
import 'normalize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Slider />
      </div>
    );
  }
}

export default App;
