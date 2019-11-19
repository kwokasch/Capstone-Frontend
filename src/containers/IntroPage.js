import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './../stylesheets/IntroPage.css';
// import backgroundImage from '../images/Background_Intro.png';

export default function IntroPage (){
    return (
        <div>
            <div className="image-container">
                <div className="background-image">
                    {/* <img src={backgroundImage} alt="background-image"/> */}
                    <h3>Helping Pets Find Their Way Home</h3>
                </div>
            </div>
        </div>
    )
}
