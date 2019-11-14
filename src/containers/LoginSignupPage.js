import React, { Component } from 'react';
import './../stylesheets/LoginSignupPage.css';

export class LoginSignupPage extends Component {
    state = {
        loginFormDisplayed: false
    }

    formLink = (event) => {
        this.setState({
            loginFormDisplayed: !this.state.loginFormDisplayed
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="form-container">
                {
                    this.state.loginFormDisplayed === false
                    ? (
                        <form className="sign-up">
                            <h2>Sign Up!</h2>
                            <div className="field">
                                <label className="field-label">First Name</label>
                                <input type="text" />
                            </div>
                            <div className="field">
                                <label className="field-label">Last Name</label>
                                <input type="text" />
                            </div>
                            <div className="field">
                                <label className="field-label">Email</label>
                                <input type="text" />
                            </div>
                            <div className="field">
                                <label className="field-label">Password</label>
                                <input type="password" />
                            </div>
                            <div className="field">
                                <label className="field-label">Confirm Password</label>
                                <input type="password" />
                            </div>
                            <button className="submit">Submit</button>
                            <div className="login-link">
                                <p onClick={this.formLink}>Already a user?</p>
                            </div>
                        </form>
                    )
                    : (
                        <form className="login">
                            <h2>Login!</h2>
                            <div className="field">
                                <label className="field-label">Email</label>
                                <input type="text" />
                            </div>
                            <div className="field">
                                <label className="field-label">Password</label>
                                <input type="password" />
                            </div>
                            <button className="submit">Submit</button>
                            <div className="signup-link">
                                <p onClick={this.formLink}>Already a user?</p>
                            </div>
                        </form>
                    )
                }

                
                
            </div>
        )
    }
}

export default LoginSignupPage
