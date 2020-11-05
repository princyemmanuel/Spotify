import React from "react";
import "./style.css";

import {
  Navbar,
  FormControl,
  Button,
  NavDropdown,
  Nav,
  Form,
  NavLink,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * @author
 * @function NavbarComponent
 **/

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Spotify</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/home" ><h4>Home</h4></NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
