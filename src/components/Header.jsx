// src/components/Header.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeToggleButton, useTheme } from "./ThemeSwitcher";

const HeaderContainer = styled.header`
  background-color: #1e1e2f;
  color: #fff;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;

  &:hover {
    background-color: #33334d;
  }
`;

const Header = () => {
    const { toggleTheme } = useTheme();
  return (
    <HeaderContainer>
      <Logo>💾 Code Wallet</Logo>
      <Nav>
        <NavLink to="/">Fragments</NavLink>
        <NavLink to="/add">Add Fragment</NavLink>
        <NavLink to="/tags">Tags</NavLink>
        <NavLink to="/about">Info</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
