import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import logo from "../../images/logo.gif";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar fixed="top" className="parent-nav shadow-lg" expand="lg">
        <Container>
          <Navbar.Brand>
            {/* <Link to="/home">
                        
                    </Link> */}
            <img width="100px" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navigation ms-auto">
              <NavLink activeClassName="selected" to="/home">
                Home
              </NavLink>
              <NavLink activeClassName="selected" to="/allOrders">
                Manage All Orders
              </NavLink>
              <NavLink activeClassName="selected" to="/addService">
                Add Service
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
