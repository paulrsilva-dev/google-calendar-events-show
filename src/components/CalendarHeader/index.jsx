import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import { signOut } from '../../store/actions/auth';

const CalendarHeader = ({ signOut }) => {
  return (
    <header>
      <h1>Calendar</h1>
      <button onClick={signOut}>Sign Out</button>
    </header>
  )
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});


export default connect(null, mapDispatchToProps)(CalendarHeader);
