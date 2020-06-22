import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.scss';

import { getEvents } from '../../store/actions/getEvents';
import { signOut } from '../../store/actions/auth';

const CalendarHeader = ({ getEvents, signOut, numberOfDays }) => {
  const handleNumberOfDays = e => {
    e.preventDefault();
    const selectedDayNumber = parseInt(e.target.value);
    getEvents(selectedDayNumber);
  };

  return (
    <header>
      <h1>Calendar</h1>
      <select value={numberOfDays} onChange={handleNumberOfDays}>
        <option value='1'>today</option>
        <option value='7'>next 7 days</option>
        <option value='30'>next 30 days</option>
      </select>
      <button className='add-new'>
        <Link to='/add-event'>Add Event</Link>
      </button>
      <button className='sign-out' onClick={signOut}>Sign Out</button>
    </header>
  )
};

const mapStateToProps = ({ events: { numberOfDays } }) => ({
  numberOfDays
});

const mapDispatchToProps = dispatch => ({
  getEvents: selectedDayNumber => dispatch(getEvents(selectedDayNumber)),
  signOut: () => dispatch(signOut())
});


export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);
