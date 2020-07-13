import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getEvents } from '../../store/actions/getEvents';

import CalendarHeader from '../../components/CalendarHeader';
import EventsList from '../../components/EventsList';
import Spinner from '../../components/Spinner';

const CalendarPage = ({ getEvents, numberOfDays, loading }) => {
  useEffect(() => {
    getEvents(numberOfDays);
  }, [getEvents, numberOfDays]);

  return (
    <>
      <CalendarHeader />
      { loading ? <Spinner /> : <EventsList /> }
    </>
  )
};

const mapStateToProps = ({ events: { numberOfDays, loading } }) => ({
  numberOfDays,
  loading: loading ? loading : null
});

const mapDispatchToProps = dispatch => ({
  getEvents: numberOfDays => dispatch(getEvents(numberOfDays))
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
