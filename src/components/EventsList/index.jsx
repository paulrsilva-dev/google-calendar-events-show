import React from 'react';
import { connect } from 'react-redux';

import Event from '../Event';

const EventsList = ({ events }) => {
  return (
    <>
      {events.length === 0 ?
        <p style={{ textAlign: 'center' }}>
          You don't have upcoming events. Rest a little <span className='smile' role='img' aria-label='smile'>😊</span>
        </p>
        :
        events && events.map(event => <Event key={event.id} event={event} />)
      }
    </>
  )
};

const mapStateToProps = ({ events }) => ({
  events: events.events ? events.events : []
});

export default connect(mapStateToProps)(EventsList);
