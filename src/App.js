import React, { Component } from 'react';
import Navbar from 'components/Navbar/Navbar';
import SliderSection from 'components/SliderSection/SliderSection';
import 'normalize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SliderSection />
      </div>
    );
  }
}

export default App;
