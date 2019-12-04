import React, { Component } from 'react'
import MapContainer from '../components/MapContainer'
import './../stylesheets/LostFoundPage.css'

const BASE_URL = "http://localhost:3000"

export default class PetProfileForm extends Component {
    state = {
        currentPet: {
            lostStatus: true,
            name: "",
            species: "",
            gender: "",
            size: "",
            color: "",
            age: 0,
            breed: "",
            temperament: "",
            comments: "",
            dateLostOrFound: "",
            chipId: "",
            additionalLostFoundInfo: "",
            latitude: "",
            longitude: "",
            pictureUrl: ""
        },
        selectedFile: 'https://vippuppies.com/wp-content/uploads/2019/04/Kurstin-497AEB12-4825-46A6-81E2-6073471430D0.jpeg'
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { lostStatus, name, species, gender, size, color, age, breed, temperament, comments, dateLostOrFound, chipId, pictureUrl } = this.state.currentPet

        this.postPet({ lostStatus, name, species, gender, size, color, age, breed, temperament, comments, dateLostOrFound, chipId, pictureUrl })

        this.props.addLocalPet(this.state.currentPet)
        console.log(this.state.currentPet)
    }
    
    postPet = (pet) => {
        fetch(`${BASE_URL}/pets`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(pet)
        }).then(response => response.json())
        .then(response => {
          if(!response.error){
            this.props.history.push('/search');
          } else {
            console.log(response.error)
          }
        })
        .catch(error => console.log(error))
      }

    handleChange = (event) => {
        const currentPet = this.state.currentPet
        currentPet[event.target.name] = event.target.value 
        this.setState({ currentPet })
    }

    render() {
        return (
            <form className="create-profile" onSubmit={this.handleSubmit}>
                <h2>Create A Pet Profile</h2>
                <div className="profile-info">
                    <div className="pet-image-box">
                        <img className="pet-photo" src={this.state.selectedFile} alt="bulldog"/>
                        <input type="text" name="pictureUrl" placeholder="Paste photo url here..." />
                    </div>
                    <div className="form-box">
                        <div className="pet-info-form-box">
                            <div className="input-field">
                                <label className="input-field-label">Name</label>
                                <input type="text" name="name" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="input-field-label">Species</label>
                                <input type="text" name="species" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="input-field-label">Gender</label>
                                <input type="text" name="gender" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="input-field-label">Size</label>
                                <input type="text" name="size" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="input-field-label">Color</label>
                                <input type="text" name="color" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="input-field-label">Age</label>
                                <input type="text" name="age" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="input-field-label">Breed</label>
                                <input type="text" name="breed" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="input-field-label">Temperament</label>
                                <input type="text" name="temperament" onChange={this.handleChange}/>
                            </div>
                            <div className="comments">
                                <label className="input-field-label">Comments</label>
                                <textarea id="comments" rows="3" cols="80" name="comments" onChange={this.handleChange} ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lost-info">
                    <h2>When and where did you lose your pet?</h2>
                    <div className="lost-form-box">
                        <div className="map-box">
                            <MapContainer onClick={this.mapClick}/>
                        </div>
                        <div className="lost-form-inputs">
                            <div className="calendar">
                                <label className="input-field-label">Date Lost</label>
                                <input id="calendar" type="date" data-date-inline-picker="true" name="dateLostOrFound" onChange={this.handleChange}/>
                            </div>
                            <div className="chip-id-field">
                                <label className="input-field-label">Chip ID</label>
                                <input type="text" name="chipId" onChange={this.handleChange}/>
                            </div>
                            <div className="lost-comments">
                                <label className="input-field-label">Comments</label>
                                <textarea id="comments" rows="3" cols="100" name="additionalLostFoundInfo" onChange={this.handleChange} ></textarea>
                            </div>
                            <div className="submit-button-holder">
                                <input id="submit-button" type="submit" value="Submit"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}