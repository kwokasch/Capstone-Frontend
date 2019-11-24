import React, { Component } from 'react'
import './../stylesheets/UserProfile.css';

const BASE_URL = "http://localhost:3000"

export class UserProfile extends Component {
    state = {
        currentUser: null
    }

    // componentDidMount(){
    //     fetch(`${BASE_URL}`, {
    //         method: 'GET', 
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(response => response.json())
    //     .then(console.log)
    // }

    render() {
        return (
            <div className="user-profile-container">
                <div className="user-info">
                    <h2>User Info:</h2>
                </div>
            </div>
        )
    }
}

export default UserProfile
