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
                <div className="photo-container"></div>
                <div className="button-container">
                    <button className="lost-button">Lost a Pet?</button>
                    <button className="found-button">Found a Pet?</button>
                </div>
                <form className="create-profile" onSubmit={this.handleSubmit}>
                    <h2>Create A Pet Profile</h2>

                    <div className="profile-info">
                        <div className="pet-image-box">
                            <img className="pet-photo" src="https://vippuppies.com/wp-content/uploads/2019/04/Kurstin-497AEB12-4825-46A6-81E2-6073471430D0.jpeg" alt="bulldog"/>
                        </div>
                        <div className="form-box">
                            <div className="field">
                                <label className="field-label">Name</label>
                                <input type="text" name="name" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Species</label>
                                <input type="text" name="species" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Gender</label>
                                <input type="text" name="gender" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Size</label>
                                <input type="text" name="size" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Color</label>
                                <input type="text" name="color" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Age</label>
                                <input type="text" name="age" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Breed</label>
                                <input type="text" name="breed" onChange={this.handleChange}/>
                            </div>
                            <div className="field">
                                <label className="field-label">Temperament</label>
                                <input type="text" name="temperament" onChange={this.handleChange}/>
                            </div>
                            <div className="comments">
                                <label className="field-label">Comments</label>
                                <input type="text" name="comments" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <input id="submit" type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default LostFoundPage
