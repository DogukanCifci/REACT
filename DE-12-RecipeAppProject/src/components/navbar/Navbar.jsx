import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  const [hamburgerCheck, setHamburgerCheck] = useState(false);
  console.log(hamburgerCheck);
  return (
    <Nav>
      <Logo to="/home" onClick={() => setHamburgerCheck(false)}>
        <i>{"<Clarusway>  "}</i>
        <span>RECIPE</span>
      </Logo>
      <Hamburger onClick={() => setHamburgerCheck(!hamburgerCheck)}>
        <GiHamburgerMenu />
      </Hamburger>
      <Menu
        hamburgerCheck={hamburgerCheck}
        onClick={() => setHamburgerCheck(!hamburgerCheck)}
      >
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
