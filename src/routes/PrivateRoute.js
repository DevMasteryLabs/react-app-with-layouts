import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import InsideLayout from '../layouts/InsideLayout'

function PrivateRoute(props) {
    const { component: Component, ...rest } = props // rest includes path
    const authenticated = localStorage.getItem('token')
    return (
        <Route
            {...rest}
            component={(props) => (
                authenticated
                    ? <InsideLayout> <Component {...props} /> </InsideLayout>
                    : <Redirect to='/login' />
            )}
        />
    )
}

export default PrivateRoute