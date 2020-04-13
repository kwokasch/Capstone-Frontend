import React, { Component } from 'react'

export default class LoginForm extends Component {
    state = {
        returningUser: {
            email: "",
            password: ""
        }
    }

    formLink = (event) => {
        this.props.isLoginFormDisplayed(false)
    }

    setUser = user => {
        this.props.setUser(this.state.returningUser)
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
    
        const { email, password } = this.state.returningUser
        
        this.loginUser({ email, password })
    }
    
    handleChange = (event) => {
        const returningUser = this.state.returningUser
        returningUser[event.target.name] = event.target.value 
        this.setState({ returningUser })
    }

    render() {
        return (
            <form className="login" onSubmit={this.handleSubmit}>
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
                />
                <div className="signup-link">
                    <p onClick={this.formLink}>Not a user? Create an account!</p>
                </div>
            </form >
        )
    }
}


