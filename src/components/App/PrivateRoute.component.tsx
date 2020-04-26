import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { isAuthenticated } from '../../services/Auth'
import Menu from '../Menu';

let PrivateRoute = ({ children, ...rest }: any) => {
  let location = useLocation();
  console.info('rendered: private route')

  return (
    <PrivateWrapper>
      <PrivateContainer>
        <Menu />
        
        { isAuthenticated() ? (
          <Route {...rest}>
            {children}
          </Route>
        ) : (
          <Redirect to={{pathname: '/login', state: { from: location }}}/>
        )}
      </PrivateContainer>
    </PrivateWrapper>
  );
};

export default PrivateRoute;

const PrivateWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;
const PrivateContainer = styled.div`
  flex-grow: 2;
  padding: 60px;
`;

