import React, { Component } from 'react';
import './../stylesheets/LoginSignupPage.css';

const BASE_URL = "http://localhost:3000"

export class LoginSignupPage extends Component {
    state = {
        loginFormDisplayed: false,
        currentUser: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: ""
        }
    }
    
    static defaultProps = {
        location: {
            existingUser: false
        }
    }

    formLink = (event) => {

        this.setState({
            loginFormDisplayed: !this.state.loginFormDisplayed
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { firstName, lastName, phoneNumber, email, password } = this.state.currentUser

        this.postUser({ firstName, lastName, phoneNumber, email, password })

        this.setState({
            currentUser: {
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: "",
                password: ""
            }
        })
    }
    
    postUser = (user) => {
        fetch(`${BASE_URL}/users`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
        }).then(response => response.json())
        .then(response => {
          if(!response.error){
            this.props.setUser(response)
            this.props.history.push('/lostfound');
          } else {
            console.log(response.error)
          }
        })
        .catch(error => console.log(error))
      }

    handleChange = (event) => {
        const currentUser = this.state.currentUser
        currentUser[event.target.name] = event.target.value 
        this.setState({ currentUser })
    }
    
    render() {
        return (
            <div className="form-container">
                {
                    this.state.loginFormDisplayed === false
                    ? (
                        <form className="sign-up" onSubmit={this.handleSubmit}>
                            <h2>Sign Up!</h2>
                            <div className="field">
                                <label className="field-label">First Name</label>
                                <input type="text" name="firstName" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Last Name</label>
                                <input type="text" name="lastName" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Phone Number</label>
                                <input type="text" name="phoneNumber" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Email</label>
                                <input type="text" name="email" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Password</label>
                                <input type="password" name="password" onChange={this.handleChange}/>
                            </div>
                            <input id="submit" type="submit" value="Submit"/>
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
                                <input type="text" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Password</label>
                                <input type="password" onChange={this.handleChange}/>
                            </div>
                            <input 
                                id="submit" 
                                type="submit" 
                                value="Submit" 
                                // onClick={this.props.history.push('/lostfound')}
                            />
                            <div className="signup-link">
                                <p onClick={this.formLink}>Not a user? Create an account!</p>
                            </div>
                        </form >
                    )
                }
 
            </div>
        )
    }
}

export default LoginSignupPage
