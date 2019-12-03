import React, { Component } from 'react'

export class LoginToken extends Component {
    componentDidMount(){
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
                
        if(token){
            this.props.logInUser(token)
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default LoginToken
