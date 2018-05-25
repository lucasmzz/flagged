import React, { Component } from 'react';
import './App.css';
import Welcome from '../components/Welcome/Welcome';
import Navigation from '../components/Navigation/Navigation';
import Flags from '../components/Flags/Flags';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navigation />
        <Welcome />
        <Flags />
      </div>
    );
  }
}

export default App;
