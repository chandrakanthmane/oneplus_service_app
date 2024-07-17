// Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './images/pngegg.png';
import userLogo from './images/user.svg';

const Header = ({onLogout, onToggle }) => {
  const [activeNav, setActiveNav] = useState('employee'); // Set default active nav to 'employee'

  const handleNavClick = (type) => {
    setActiveNav(type);
    onToggle(type);
  };

  const Logout = (e) =>{
    e.preventDefault();
    // Perform logout logic here
    onLogout();
  }
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Paragraph>OnePlus Service Kakinada</Paragraph>
      <Nav>
        <NavLink isActive={activeNav === 'employee'} onClick={() => handleNavClick('employee')}>Employee</NavLink>
        <NavLink isActive={activeNav === 'finance'} onClick={() => handleNavClick('finance')}>Finance</NavLink>
      </Nav>
      <User>
        <img src={userLogo} alt="Logo" />
        <p>Dumy John</p>
      </User>
      <Button type="button" onClick={Logout}>Logout</Button>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  background-color: #333;
  color: white;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: 20%;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
  font-size: 1.2em;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background: none;
  font-size: 1em;
  border: none;
  color: white;
  cursor: pointer;
  text-decoration: none;
  right: 0;
  position: fixed;
  margin-right: 10px;
`;
 
const User = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  right: 100px;
  
  img{
  width: 25px;
  height: 25px;
  margin-right: 5px;
  }

  p{
  font-size: 1em;
  }

`;
