import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import OutsideLayout from '../layouts/OutsideLayout'

function PublicRoute(props) {
    const { component: Component, ...rest } = props // rest includes path
    const authenticated = localStorage.getItem('token')
    return (
        <Route 
            {...rest}
            component={(props) => (
                authenticated
                    ? <Redirect to='/dashboard' />
                    : <OutsideLayout> <Component {...props} /> </OutsideLayout>
            )}
        />
    )
}

export default PublicRoute