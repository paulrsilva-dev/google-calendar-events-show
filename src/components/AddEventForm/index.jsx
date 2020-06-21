import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import { checkInputDates } from '../../common';
import { addEvent } from '../../store/actions/addEvent';

const AddEventForm = ({ addEvent, requestError }) => {
  const [eventSummary, setEventSummary] = useState('');
  const [eventStart, setEventStart] = useState('');
  const [eventEnd, setEventEnd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = e => {
    if (e.target.name === 'eventSummary') setEventSummary(e.target.value);
    if (e.target.name === 'eventStart') setEventStart(e.target.value);
    if (e.target.name === 'eventEnd') setEventEnd(e.target.value);
  };

  const handleAddEvent = e => {
    e.preventDefault();
    const startDateBeforeEndDate = checkInputDates(eventStart, eventEnd);
    
    if (startDateBeforeEndDate) {
      const event = {
        'summary': eventSummary,
        'start': {
          'dateTime': `${eventStart}:00`,
          'timeZone': 'Europe/Zagreb'
        },
        'end': {
          'dateTime': `${eventEnd}:00`,
          'timeZone': 'Europe/Zagreb'
        }
      };

      addEvent(event);
      resetForm();
    } else {
      setErrorMessage('Please check inserted dates.');
    }
  };

  const resetForm = () => {
    setEventSummary('');
    setEventStart('');
    setEventEnd('');
    setErrorMessage('');
  };

  return (
    <div className='add-event-form'>
      {errorMessage && <p className='error'>{errorMessage}</p>}
      {requestError && <p className='error'>{requestError}</p>}
      <form onSubmit={handleAddEvent}>
        <input
          name='eventSummary'
          type="text"
          value={eventSummary}
          onChange={handleInputChange}
          placeholder='Event Summary'
          required={true}
        />
        <input
          name='eventStart'
          type="datetime-local"
          value={eventStart}
          onChange={handleInputChange}
          required={true}
        />
        <input
          name='eventEnd'
          type="datetime-local"
          value={eventEnd}
          onChange={handleInputChange}
          required={true}
        />
        <button type='submit'>Add Event</button>
        <p className='time-zone'>*Time Zone: Europe/Zagreb</p>
      </form>
    </div>
  )
};

const mapStateToProps = ({ newEvent: { error } }) => ({
  requestError: error
});

const mapDispatchToProps = dispatch => ({
  addEvent: event => dispatch(addEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEventForm);
