import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddEventPage from './pages/AddEventPage';
import CalendarPage from './pages/CalendarPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';

const createRoutes = () => (
  <Switch>
    <ProtectedRoute exact path='/calendar' component={CalendarPage} />
    <ProtectedRoute exact path='/add-event' component={AddEventPage} />
    <Route exact path='/' component={HomePage} />
    <Route path='*' render={() => '404 Page Not Found'} />
  </Switch>
);

export default createRoutes;
