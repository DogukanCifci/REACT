import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../img/logo.png";
//!react-bootstrap MyNavbar component
const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          {" "}
          <img src={logo} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">People</Nav.Link>
            <Nav.Link href="#action3">People</Nav.Link>
           
          </Nav>

       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
