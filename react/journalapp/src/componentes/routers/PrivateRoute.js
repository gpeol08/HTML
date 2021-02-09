import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('path',rest.location.pathname)
    return (
        <Route
            {...rest}
            component={(props) => (
                (isAutenticated)
                    ? <Component {...props} />
                    : (<Redirect to='/auth/login' />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}