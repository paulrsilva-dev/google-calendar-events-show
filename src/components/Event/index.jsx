import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './styles.scss';

import { deleteEvent } from '../../store/actions/deleteEvent';

import clockIcon from '../../assets/clock.svg';
import trashIcon from '../../assets/trash.svg';

const Event = ({ event, deleteEvent }) => {
  const { id, summary, start, end } = event;

  const fullDate = start.date ? start.date : start.dateTime;
  const day = moment(fullDate).format('DD');
  const month = moment(fullDate).format('MM');
  const year = moment(fullDate).format('YYYY');

  const timeStart = start.date ? null : moment(start.dateTime).format('HH:mm');
  const timeEnd = start.date ? null : moment(end.dateTime).format('HH:mm');
  const eventTime = start.date ? 'All day' : `${timeStart} - ${timeEnd}`;

  const handleDeleteEvent = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) deleteEvent(eventId);
    return;
  }

  return (
    <div className='event'>
      <div className='date'>
        <p>{day}</p>
        <p>{month}</p>
        <p>{year}</p>
      </div>
      <div className='info'>
        <p>Summary: {summary}</p>
        <div className='time'>
          <img src={clockIcon} alt='time' className='icon' />
          {eventTime}
        </div>
        <p onClick={() => handleDeleteEvent(id)} className='delete'>
          <img src={trashIcon} alt='Delete' className='icon' />
          Delete event
        </p>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  deleteEvent: eventId => dispatch(deleteEvent(eventId))
});

export default connect(null, mapDispatchToProps)(Event);
