import React from 'react';
import { connect } from 'react-redux';

import AddEventForm from '../../components/AddEventForm';
import Spinner from '../../components/Spinner';

import './styles.scss';

const AddEventPage = ({ loading }) => {
  return (
    <div className='add-event-page'>
      <h1>Add new event</h1>
      {loading ? <Spinner /> : <AddEventForm />}
    </div>
  );
};

const mapStateToProps = ({ newEvent: { loading } }) => ({
  loading: loading ? loading : null,
});

export default connect(mapStateToProps)(AddEventPage);
