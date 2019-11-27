import React from 'react';
import { Link } from 'react-router-dom';
import './../stylesheets/NavBar.css';

export default function NavBar(props) {
    
    return (
        <div className="nav-bar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/search">Search</Link>
            {
                props.currentUser === null
                ? <Link className="link" to="/login">Login / Sign Up</Link>
                : <Link className="link" to="/">Logout</Link>
            }
        </div>
    )
}
