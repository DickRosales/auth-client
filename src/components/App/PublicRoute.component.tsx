import React, { FunctionComponent, ReactChild } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { isAuthenticated } from '../../services/Auth'

// A wrapper for <Route> that redirects to the overview
// screen if you are authenticated.
let PublicRoute: FunctionComponent<{ children: ReactChild, path: string }> = ({ children, ...rest }: any) => {
  let location = useLocation();
  console.info('rendered: public route')
  
  return (
    <PublicWrapper>
      <PublicContainer>
        { !isAuthenticated() ? (
          <Route {...rest}>
            {children}
          </Route>
        ) : (
          <Redirect to={{pathname: '/overview', state: { from: location }}}/>
        )}
      </PublicContainer>
    </PublicWrapper>
  );
};

export default PublicRoute;

const PublicWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background['base']};
  color: ${({ theme }) => theme.colors.text['base']};
`;
const PublicContainer = styled.div``;
