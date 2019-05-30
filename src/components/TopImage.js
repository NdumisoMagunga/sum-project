import React, { Component } from 'react';
import { Jumbotron } from  'reactstrap';
import topImage from '../assets/homeTop.jpg';

const sectionStyle= {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${topImage})`,
  backgroundColor: "transparent"
};

class TopImage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log('the info', this.props);
    return (
      <section style={sectionStyle}>
      <div>
        <h1 style={{
          textAlign:'center', color:'white', alignItems:'center', justifyContent:'center'
          }}>
          {this.props.title}
        </h1>
        <p style={{textAlign:'center', color:'white'}}>
          {this.props.ha4} <br/> <strong>{this.props.ha3}</strong>
        </p>

      </div>
      
      </section>
    );
  }
}

export default TopImage;
