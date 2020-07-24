import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import Event from '../Event';

import './styles.scss';

const EventsGroup = ({ group, numberOfDays }) => {
  const startDate =
    numberOfDays === 30
      ? group.startDate
      : moment(group.startDate).format('DD.MM.YYYY.');

  return (
    <div className='events-group'>
      <p>{startDate}</p>
      <div className='group-box'>
        {group.events &&
          group.events.map(event => <Event key={event.id} event={event} />)}
      </div>
    </div>
  );
};

const mapStateToProps = ({ events: { numberOfDays } }) => ({
  numberOfDays,
});

export default connect(mapStateToProps)(EventsGroup);
