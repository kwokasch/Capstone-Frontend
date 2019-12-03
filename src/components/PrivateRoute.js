import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import UserProfile from './UserProfile'

export default function PrivateRoute(props) {
    console.log(props)
    let { exact, path, isLoggedIn, currentUser } = props
    return (
        <div>
            <Route {...props} render={props => {
                return isLoggedIn ? <UserProfile currentUser={currentUser} /> : <Redirect to='/login'/>}
            } />
        </div>
    )
}
