import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

import { formatDate, formatTime } from '../../common';
import { deleteEvent } from '../../store/actions/deleteEvent';

import clockIcon from '../../assets/clock.svg';
import trashIcon from '../../assets/trash.svg';

const Event = ({ event, deleteEvent }) => {
  const { id, summary, start, end } = event;
  const { day, month, year } = formatDate(start.dateTime);
  const timeStart = formatTime(start.dateTime);
  const timeEnd = formatTime(end.dateTime);

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
          {timeStart.hour}:{timeStart.minute} - {timeEnd.hour}:{timeEnd.minute}
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
