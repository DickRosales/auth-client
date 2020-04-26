import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from '../../constants/theme'
import PublicRoute from './PublicRoute.component';
import PrivateRoute from './PrivateRoute.component';
import LoginPage from '../../domain/Login';
import AssetsPage from '../../domain/Assets';

function App() {

  return (
    <ThemeProvider theme={LightTheme}>

      <Switch>

        <PublicRoute path="/login">
          <LoginPage />
        </PublicRoute>
        <PublicRoute path="/signup">
          <LoginPage />
        </PublicRoute>
        <PublicRoute path="/forgot-password">
          <LoginPage />
        </PublicRoute>

        <PrivateRoute path="/overview">
          <AssetsPage />
        </PrivateRoute>
        <PrivateRoute path="/assets">
          <AssetsPage />
        </PrivateRoute>

        <Route path='*'>
          <Redirect to='/login' />
        </Route>
      </Switch>

    </ThemeProvider>
  );
}

export default App;
