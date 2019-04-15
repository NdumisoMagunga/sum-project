import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: 'transparent'}} fixed light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" style={{fontWeight: '800', fontStyle:'bold', fontSize: 18}}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{fontWeight: '800', fontStyle:'bold', fontSize: 18}}>Solutions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{fontWeight: '800', fontStyle:'bold', fontSize: 18}}>Clients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{fontWeight: '800', fontStyle:'bold', fontSize: 18}}>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{fontWeight: '800', fontStyle:'bold', fontSize: 18}}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}