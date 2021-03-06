import React, { FunctionComponent, MouseEvent } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../services/Auth'

let MenuComponent: FunctionComponent = () => {
  const history = useHistory();

  let handleLogout = (event: MouseEvent): void => {
    event.preventDefault();
    logout(() => {history.push("/")});
  }

  return (
    <Menu>

      <Logo>mixLabs</Logo>

      <LinkList>
        <Link to='/overview'>Overview</Link>
        <Link to='/services'>Services</Link>
        <Link to='/assets'>Assets</Link>
        <Link to='/rights'>Rights</Link>
        <Link to='/distribution'>Distribution</Link>
        <Link to='/earnings'>Earnings</Link>
        <Link to='/analytics'>Analytics</Link>
        <Link to='/faq'>FAQ</Link>
      </LinkList>

      <HR />

      <LinkList>
        <Link to='/account'>Account</Link>
        <LogoutLink onClick={handleLogout}>Log out</LogoutLink>
      </LinkList>
      
    </Menu>
  );
}

export default MenuComponent;

const Menu = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #282A2F;
  flex-basis: 250px;

  display: flex;
  flex-flow: column;

  padding: 72px 32px 64px 32px;
  box-sizing: border-box;
`;
const Logo = styled.h1`
  width: 100%;
  font-size: 32px;
  font-weight: 600;
`;
const HR = styled.div`
  width: 100%;
  height: 2px;
  background-color: #51525C;
`;
const LinkList = styled.div`
  margin: 24px 0;
`;
const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  margin: 16px 0;
  color: #51525C;
  cursor: pointer;

  &.active {
    color: #E8E7EC;
  }
`;
const LogoutLink = styled.button`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  margin: 16px 0;
  color: #51525C;
  background-color: transparent;
  cursor: pointer;
  border: 0;
  outline: 0;
  padding: 0;

  &.active {
    color: #E8E7EC;
  }
`;
