import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';

  import logo from '../assets/logo2.jpg';

export default class AppNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: 'white', position:'fixed', top:0,width:'100%' }} static light expand="md">
          <Link to="/"><NavbarBrand ><img src={logo} style={{height:50, width:50}} alt="" />SUM</NavbarBrand></Link>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/services"><NavLink style={{fontWeight: '800', fontStyle:'bold', fontSize: 18}}>Services</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/solutions"><NavLink style={{fontWeight: '800', fontStyle:'bold', fontSize: 18}}>Solutions</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/client"><NavLink style={{fontWeight: '800', fontStyle:'bold', fontSize: 18}}>Clients</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/about"><NavLink style={{fontWeight: '800', fontStyle:'bold', fontSize: 18}}>About Us</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/contact"><NavLink style={{fontWeight: '800', fontStyle:'bold', fontSize: 18}}>Contact</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}