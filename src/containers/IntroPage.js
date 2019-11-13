import React, { Component } from 'react';
import Header from './../components/Header';
import NavBar from './../components/NavBar';
import SubHeader from './../components/SubHeader';
import './../stylesheets/IntroPage.css';
import backgroundImage from '../images/Background_Intro.png';

export default class IntroPage extends Component {
    render(){
        return (
            <body>
                <header>
                    <div className="header-container">
                        <Header />
                        <NavBar />
                    </div>
                    <div className="subheader">
                        <SubHeader />
                    </div>
                </header>
                <div className="image-container">
                    <div className="background-image">
                        <img src={backgroundImage} alt="background-image"/>
                        <p>Helping Owners Find Their Pets</p>
                    </div>
                </div>
                <div className="info-container">
                    <div className="info-box">Lost A Pet?
                        <h3>Losing a pet is upsetting and stressful.</h3>
                        <p>Create a profile for your pet and get the word out there!</p>
                        <button>Get Started</button>
                    </div>
                    <div className="info-box">Found A Pet?
                    <h3>Thank you for helping a pet in their time of need!</h3>
                        <p>Create a profile for the pet and help reunite them with their owner!</p>
                        <button>Get Started</button>
                    </div>
                </div>
            </body>
        )
    }
}
