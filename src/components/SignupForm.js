import React, { Component } from 'react'

const BASE_URL = "https://homeward-bound-new.herokuapp.com/"

export default class SignupForm extends Component {
    state = {
        newUser: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: ""
        }
    }

    formLink = (event) => {
        this.props.isLoginFormDisplayed(true)
    }
    
    setUser = user => {
        this.props.setUser(this.state.newUser)
    }
   
    handleSubmit = (event) => {
        event.preventDefault()
    
        const { firstName, lastName, phoneNumber, email, password } = this.state.newUser
    
        this.postUser({ firstName, lastName, phoneNumber, email, password })
    
        this.setState({
            newUser: {
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
            localStorage.setItem ('user', JSON.stringify(user))
            window.location.href = "https://homeward-bound-new.herokuapp.com/userprofile"
          } else {
            console.log(response.error)
          }
        })
        .catch(error => console.log(error))
      }
    
    handleChange = (event) => {
        const newUser = this.state.newUser
        newUser[event.target.name] = event.target.value 
        this.setState({ newUser })
    }

    render() {
        return (
            <form className="sign-up" onSubmit={this.handleSubmit}>
                <h2>Sign Up!</h2>
                <a className="google-button" href="https://homeward-bound-new.herokuapp.com/auth/google"> </a>
                <h3> - or - </h3>
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
                    {/* <p onClick={this.formLink}>Already a user?</p> */}
                </div>
            </form>
        )
    }
}
