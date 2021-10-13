import React/* , { useContext } */ from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
/* import { AuthContext } from '../../Context/auth'; */
import { useSelector } from 'react-redux';

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated
        ? <Component {...rest} />
        : <Redirect to={{ pathname: "/not-found", state: { from: props.location } } }/>
      }
    />
  )
}

RoutesPrivate.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.func.isRequired,
}

export default RoutesPrivate;
