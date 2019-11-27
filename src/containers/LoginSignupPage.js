import React, { Component } from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import './../stylesheets/LoginSignupPage.css';

const BASE_URL = "http://localhost:3000"

export class LoginSignupPage extends Component {
    state = {
        loginFormDisplayed: false
    }

    isLoginFormDisplayed = trueFalse => {
        this.setState({
            loginFormDisplayed: trueFalse
        })
    }
    
    render() {
        return (
            <div>
                <div className="image-container">
                    <div className="background-image">
                        <div className="form-container">
                            {
                                this.state.loginFormDisplayed === false
                                ? <SignupForm isLoginFormDisplayed={this.isLoginFormDisplayed} setUser={this.props.setUser}/>
                                : <LoginForm isLoginFormDisplayed={this.isLoginFormDisplayed} setUser={this.props.setUser}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginSignupPage
