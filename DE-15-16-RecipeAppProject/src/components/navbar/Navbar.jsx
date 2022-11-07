import React from "react";
import { Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Clarusway>  "}</i>
        <span>RECIPE</span>
      </Logo>

      <Menu>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://github.com/DogukanCifci" target="blank">
          Github
        </a>
        <MenuLink to="/">LOGOUT</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
