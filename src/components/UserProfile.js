import React, { Component } from 'react'
import './../stylesheets/UserProfile.css';

export default class UserProfile extends Component {
    render(){
        const { currentUser } = this.props

        console.log('currentUser userprofile', currentUser)
        
        return (
            <div className="user-profile-container">
                <div className="user-profile-info">
                    <div className="user-info">
                        <h1>User Profile</h1>
                        <div className="user-image-box">
                            <img className="user-photo" src="https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg" alt="user"/>
                        </div>
                        <h2>Firstname & Lastname</h2>
                        <h2>Email</h2>
                        <h2>Phone Number</h2>
                    </div>
                    <div className="user-preferences">
                        <h1>Notification Preferences</h1>
                        <div className="select-preferences">
                            <input className="preferences" type="checkbox" id="email" name="email" />
                            <label className="preferences" for="email">Email</label>
                            <input className="preferences" type="checkbox" id="text" name="text" />
                            <label className="preferences" for="text">Text</label>
                            <input className="preferences" type="checkbox" id="phone" name="phone" />
                            <label className="preferences" for="phone">Phone</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
        