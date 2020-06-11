import React from 'react';
import { connect } from 'react-redux';

import Event from '../Event';

const EventsList = ({ events }) => {
  return (
    <>
      {events && events.map(event => <Event key={event.id} event={event} />)}
    </>
  )
};

const mapStateToProps = ({ events }) => ({
  events: events.events ? events.events : []
});

export default connect(mapStateToProps)(EventsList);
