import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import { loadClient, signIn } from '../../store/actions/auth';

const Home = ({ loadClient, signIn }) => {
  useEffect(() => {
    loadClient();
  });
  
  return (
    <div className='homepage'>
      <h1>Sign in to see Google Calendar events</h1>
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loadClient: () => dispatch(loadClient()),
  signIn: () => dispatch(signIn())
})

export default connect(null, mapDispatchToProps)(Home);
