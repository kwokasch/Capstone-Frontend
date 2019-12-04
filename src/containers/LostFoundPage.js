import React, { Component } from 'react'
import PetProfileForm from '../components/PetProfileForm'
import './../stylesheets/LostFoundPage.css';
require('dotenv').config()

export class LostFoundPage extends Component {
    state = {
        foundFormShowing: false,
    }

    render() {
        console.log(this.props)
        return (
            <div className="profile-container">
                <PetProfileForm {...this.props} addLocalPet={this.props.addLocalPet} setCurrentPet={this.props.setCurrentPet}/>
            </div>
        )
    }
}

export default LostFoundPage
