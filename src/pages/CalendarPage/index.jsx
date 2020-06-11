import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getEvents } from '../../store/actions/getEvents';

import CalendarHeader from '../../components/CalendarHeader';
import EventsList from '../../components/EventsList';

const CalendarPage = ({ getEvents }) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <>
      <CalendarHeader />
      <EventsList />
    </>
  )
};

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents())
});

export default connect(null, mapDispatchToProps)(CalendarPage);
