import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import StoreContext from '../../Context/Context';

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);

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
  component: PropTypes.element.isRequired,
}

export default RoutesPrivate;
