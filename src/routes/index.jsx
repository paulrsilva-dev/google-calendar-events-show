import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddEventPage from '../pages/AddEvent';
import CalendarPage from '../pages/Calendar';
import HomePage from '../pages/Home';
import ProtectedRoute from '../components/ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path='/calendar/add-event' component={AddEventPage} />
      <ProtectedRoute path='/calendar' component={CalendarPage} />
      <Route path='/' component={HomePage} />
      <Route path='*' render={() => '404 Page Not Found'} />
    </Switch>
  );
};

export default Routes;
