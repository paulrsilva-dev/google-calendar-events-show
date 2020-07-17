import React from 'react';
import { connect } from 'react-redux';

import EventsGroup from '../EventsGroup';

const EventsList = ({ events }) => {
  return (
    <>
      {events.length === 0 ?
        <p style={{ textAlign: 'center' }}>
          You don't have upcoming events. Rest a little <span role='img' aria-label='smile'>😊</span>
        </p>
        :
        events && events.map((eventsGroup, i) => <EventsGroup key={i} group={eventsGroup} />)
      }
    </>
  )
};

const mapStateToProps = ({ events }) => ({
  events: events.events ? events.events : []
});

export default connect(mapStateToProps)(EventsList);
