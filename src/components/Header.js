import React from 'react';
import './../stylesheets/Header.css';
import logo from '../images/Logo_v2.png';

export default function Header(props) {
    return (
        <div className="logo-box">
            <img className="header-logo" src={logo} alt="logo"/>
        </div>
    )
}
