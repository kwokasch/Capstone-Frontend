import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './../stylesheets/IntroPage.css';
// import backgroundImage from '../images/Background_Intro.png';

export default function IntroPage (){

    return (
        <body>
            <div className="image-container">
                <div className="background-image">
                    {/* <img src={backgroundImage} alt="background-image"/> */}
                    <h3>Helping Owners Find Their Pets</h3>
                </div>
            </div>
            <div className="info-container">
                <div className="info-box">Lost A Pet?
                    <h3>Losing a pet is upsetting and stressful.</h3>
                    <p>Create a profile for your pet and get the word out there!</p>
                    <Link 
                        className="link" 
                        to={{
                            pathname: '/login',
                            state: {
                                redirect_to: 'lost'
                            }
                        }}>
                        <button>Get Started</button>    
                    </Link>
                </div>
                <div className="info-box">Found A Pet?
                <h3>Thank you for helping a pet in their time of need!</h3>
                    <p>Create a profile for the pet and help reunite them with their owner!</p>
                    <Link 
                        className="link" 
                        to={{
                            pathname: '/login',
                            state: {
                                redirect_to: 'found'
                            }
                        }}>
                        <button>Get Started</button>    
                    </Link>
                        
                </div>
            </div>
        </body>
    )
}
