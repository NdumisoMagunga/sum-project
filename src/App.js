import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import Landing from './screens/Home';
import About from './screens/About';
import Client from './screens/Clients';
import Contact from './screens/Contact';
import Services from './screens/Services';
import Solutions from './screens/Solutions'; 

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <AppNavbar />
        <div style={{marginTop:'5.5%'}}>
          <Route component={Landing} exact path='/'/>
          <Route component={About} exact path='/about'/>
          <Route component={Client} exact path='/client'/>
          <Route component={Contact} exact path='/contact'/>
          <Route component={Services} exact path='/services'/>
          <Route component={Solutions} exact path='/solutions'/>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
