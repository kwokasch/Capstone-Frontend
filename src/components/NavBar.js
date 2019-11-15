import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './../stylesheets/NavBar.css';

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <Link className="link" to="/">Main</Link>
            <Link className="link" to="/search">Search</Link>
            {
                props.currentUser === null
                ? <Link className="link" to="/login">Login / Sign Up</Link>
                : <h2>Hello, {props.currentUser.firstName}!</h2>
            }
        </div>
    )
}
