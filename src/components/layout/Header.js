import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/Logo.png';

export const Header = () => {
  return (<React.Fragment>
    <Navbar bg="dark" className="navbar appHeader">
      <Navbar.Brand href="/">
        <img
          src={logo}
          className="d-inline-block align-top"
          alt="AmorphicLogo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        <NavLink to="/products" className="nav-link">Products</NavLink>
        <NavLink to="/inventory" className="nav-link">Inventory</NavLink>
        <NavLink to="/locations" className="nav-link">Locations</NavLink>
        <NavLink to="/help" className="nav-link">Help</NavLink>
      </Nav>
    </Navbar>
  </React.Fragment>);
}

export default Header;