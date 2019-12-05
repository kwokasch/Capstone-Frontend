import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../stylesheets/UserProfile.css';

export default class UserProfile extends Component {
    render(){
        const user = JSON.parse(localStorage.getItem('user'))
        const pet = JSON.parse(localStorage.getItem('pet'))

        return (
            <div className="user-profile-container">
                <div className="user-pet-profile-info">
                    <div className="user-profile-info">
                        <div className="user-info">
                            <h1>User Profile</h1>
                            <div className="user-image-box">
                                <img className="user-photo" src="https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg" alt="user"/>
                            </div>
                            <h2>{user.firstName} {user.lastName}</h2>
                            <h3>{user.email}</h3>
                            <h3>{user.phoneNumber}</h3>
                        </div>
                    </div>
                    <div className="pet-profile-info">
                        <div className="pet-info">
                        <h1>Pet Profile</h1>
                            {
                                pet
                                ? (<>
                                        <div className="my-pet-image-box">
                                            <img className="my-pet-photo" src={pet.pictureUrl} alt="Pet"/>
                                        </div>
                                        <h2>{pet.name}</h2>
                                        <h3>{pet.gender}</h3>
                                        <h3>{pet.breed}</h3>
                                        <h3>{pet.age}</h3>
                                    </>
                                )
                                
                                : <Link className="link" to="/lostfound">
                                    <button className="to-pet-profile">
                                        Create a pet profile
                                    </button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
        