import React, { Component } from 'react';
import './App.css';
import Welcome from '../components/Welcome/Welcome';
import Navigation from '../components/Navigation/Navigation';
import Flags from '../components/Flags/Flags';




class App extends Component {

onFlagCheck = () => {
	console.log("checking flag...");
	// 1) pre-check input 
	// 2) validate if text input is equals country name
	// 	a) if yes, update user´s score and attempts and mark flag as completed in users profile
	// 	b) if no, uupdate user attempts
	// 3) finally, retrieve a new non-completed flag
	
}

render() {
    return (
      <div className="App">
      	<Navigation />
        <Welcome />
        <Flags onFlagCheck={this.onFlagCheck}/>
      </div>
    );
  }
}

export default App;
