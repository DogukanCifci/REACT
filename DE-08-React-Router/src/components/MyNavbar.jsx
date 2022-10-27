import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";
//!react-bootstrap MyNavbar component
//!!!className="nav-link" vermemin sebebi normalde bunlar Nav.Link reactbootstrapti. Ama biz onu router ile kullanmak icin NavLink yaptik dolayisiyla styller kayboldu.Ama normal bootstrap kullanarak o stilleri geri cagirdik
const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          {" "}
          <img src={logo} alt="" />{" "}
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/teacher"
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Teacher
            </NavLink>
            <NavLink
              className="nav-link"
              to="/courses"
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Courses
            </NavLink>
            <NavLink
              className="nav-link"
              to="/contact"
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
