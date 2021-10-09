import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../Context/auth';

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => token
        ? <Component {...rest} />
        : <Redirect to="/not-found" />
      }
    />
  )
}

RoutesPrivate.propTypes = {
  component: PropTypes.func.isRequired,
}

export default RoutesPrivate;
