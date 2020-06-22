import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getEvents } from '../../store/actions/getEvents';

import CalendarHeader from '../../components/CalendarHeader';
import EventsList from '../../components/EventsList';

const CalendarPage = ({ getEvents, numberOfDays }) => {
  useEffect(() => {
    getEvents(numberOfDays);
  }, [getEvents, numberOfDays]);

  return (
    <>
      <CalendarHeader />
      <EventsList />
    </>
  )
};

const mapStateToProps = ({ events: { numberOfDays } }) => ({
  numberOfDays
});

const mapDispatchToProps = dispatch => ({
  getEvents: numberOfDays => dispatch(getEvents(numberOfDays))
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
