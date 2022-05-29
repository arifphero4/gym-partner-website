import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.gif";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div className="">
      <Navbar fixed="top" className="parent-nav shadow-lg" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img height={"70px"} src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navigation ms-auto">
              <NavLink activeClassName="selected" as={Link} to="/home">
                Home
              </NavLink>

              {user?.email ? (
                <>
                  <NavLink
                    activeClassName="selected"
                    as={Link}
                    to="/manageInventory"
                  >
                    Manage Items
                  </NavLink>
                  <NavLink activeClassName="selected" as={Link} to="/addItems">
                    Add Item
                  </NavLink>
                  <NavLink activeClassName="selected" as={Link} to="/myItems">
                    My Items
                  </NavLink>{" "}
                  <NavLink activeClassName="selected" as={Link} to="/blogs">
                    Blogs
                  </NavLink>
                  <NavLink activeClassName="selected" as={Link} to="/about">
                    About
                  </NavLink>
                  <button className="btn btn-success" onClick={handleLogOut}>
                    Log out
                  </button>
                  <NavLink
                    style={{
                      color: "#10b377",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    {user?.displayName}
                  </NavLink>
                </>
              ) : (
                <NavLink activeClassName="selected" as={Link} to="/login">
                  Sign In
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
