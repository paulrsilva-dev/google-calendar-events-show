import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isSignedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isSignedIn) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

const mapStateToProps = ({ auth: { isSignedIn } }) => ({
  isSignedIn,
});

export default connect(mapStateToProps)(ProtectedRoute);
