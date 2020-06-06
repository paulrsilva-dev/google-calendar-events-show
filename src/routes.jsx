import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';

const createRoutes = () => (
  <Switch>
    <ProtectedRoute exact path='/calendar' component={CalendarPage} />
    <Route exact path='/' component={HomePage} />
    <Route path='*' render={() => '404 Page Not Found'} />
  </Switch>
);


export default createRoutes;
