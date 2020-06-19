import React from 'react';
import './styles.scss';

import AddEventForm from '../../components/AddEventForm';

const AddEventPage = () => {
  return (
    <div className='add-event-page'>
      <h1>Add new event</h1>
      <AddEventForm />
    </div>
  )
}

export default AddEventPage;
