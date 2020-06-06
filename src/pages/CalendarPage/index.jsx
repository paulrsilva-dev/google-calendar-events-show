import React from 'react';
import { connect } from 'react-redux';

import { signOut } from '../../store/actions/auth';

const CalendarPage = ({ signOut }) => {
  return (
    <>
      <div>Calendar Page</div>
      <button onClick={signOut}>Sign Out</button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(CalendarPage);
