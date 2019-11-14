import React, { Component } from 'react'
import './../stylesheets/LostFoundPage.css';

export class LostFoundPage extends Component {
    state = {
        currentPet: {

        }
    }

    render() {
        return (
            <div className="profile-container">
                <div className="image-container"></div>
                <form className="create-profile" onSubmit={this.handleSubmit}>
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
                    {/* <div className="field">
                        <label className="field-label">Confirm Password</label>
                        <input type="password" name="password"/>
                    </div> */}
                    <input id="submit" type="submit" value="Submit"/>
                    <div className="login-link">
                        <p onClick={this.formLink}>Already a user?</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default LostFoundPage
