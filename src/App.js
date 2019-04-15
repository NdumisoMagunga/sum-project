import React, { Component } from 'react';
import './App.css';

import AppNavbar from './components/AppNavbar';
import Landing from './screens/Home';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Landing />
      </div>
    );
  }
}

export default App;
