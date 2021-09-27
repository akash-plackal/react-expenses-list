import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuData } from "../Data/MenuData";
import { Button } from "../styles/Button";
import { CgMenuRight } from "react-icons/cg";

const Nav = styled.nav`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  z-index: 100;
  position: fixed;
`;

const Logo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  font-style: italic;
`;

const MenuBar = styled(CgMenuRight)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: #fff;
    transform: translate(-12px, -12%);
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -50px;
  /* letter-spacing: 1px; */

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBar onClick={toggle} />
      <NavMenu>
        {MenuData.map((item, index) => {
          return (
            <NavMenuLinks to="item.link" key={index}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
