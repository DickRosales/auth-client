import React, { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../../constants/theme'
import PublicRoute from './PublicRoute.component';
import PrivateRoute from './PrivateRoute.component';
import LoginPage from '../../domain/Login';
import AssetsPage from '../../domain/Assets';
import VideoPage from '../../domain/Video';

let App: FunctionComponent = () => {

  let theme = Math.random() > 0.5 ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={theme}>

      <Switch>

      <PublicRoute path="/video">
          <VideoPage />
        </PublicRoute>
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
};

export default App;
