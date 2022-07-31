import React from 'react'
import { Route } from 'react-router-dom'
import InsideLayout from '../layouts/InsideLayout'
import OutsideLayout from '../layouts/OutsideLayout'

function CustomRoute(props) {
    const { component: Component, ...rest } = props // rest includes path
    const authenticated = localStorage.getItem('token')
    return (
        <Route
            {...rest}
            component={(props) => (
                authenticated
                    ? <InsideLayout> <Component {...props} /> </InsideLayout>
                    : <OutsideLayout> <Component {...props} /> </OutsideLayout>
            )}
        />
    )
}

export default CustomRoute