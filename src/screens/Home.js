import React, { Component } from 'react';

import TopImage from '../components/TopImage';
import DataExtender from '../components/Extender';

class Landing extends Component {
  render() {
    return (
      <div contentEditable>
        <TopImage
        title="Sum Clearing Agent's Official Website"
        ha4='We help you keep moving'
        ha3='All Around the World'/>

        <h2 style={{color:'black', textAlign:'center', marginTop:'5px', textDecoration:'underline'}}>
        Our Services to You as a Client</h2>
        <DataExtender />
      </div>
    );
  }
}

export default Landing;
