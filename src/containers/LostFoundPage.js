import React, { Component } from 'react'
import './../stylesheets/LostFoundPage.css';
const BASE_URL = "http://localhost:3000"

export class LostFoundPage extends Component {
    state = {
        foundFormShowing: false,
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
            // dateLostOrFound: "",
            // chipId: "",
            // additionalLostFoundInfo: "",
            // latitude: "",
            // longitude: "",
            // pictureUrl: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { lostStatus, name, species, gender, size, color, age, breed, temperament, comments } = this.state.currentPet

        this.postPet({ lostStatus, name, species, gender, size, color, age, breed, temperament, comments })

        this.setState({
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
                comments: ""
            }
        })
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
            this.props.setPet(response)
            // this.props.history.push('/lostfound');
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

    scrollToProfile = (event) => {
        // console.log(this.state.currentPet["lostStatus"])
        // if (event.target.id === "lost"){
        //     this.setState({ currentPet.lostStatus: true })
        // } else {
        //     this.setState({ currentPet["lostStatus"]: false })
        // }
    }

    render() {
        return (
            <div className="profile-container">
                <div className="photo-container"></div>
                <div className="button-container">
                    <button id="lost" className="lost-button" onClick={this.scrollToProfile}>Lost a Pet?</button>
                    <button id="found" className="found-button" onClick={this.scrollToProfile}>Found a Pet?</button>
                </div>
                <form className="create-profile" onSubmit={this.handleSubmit}>
                    <h2>Create A Pet Profile</h2>

                    <div className="profile-info">
                        <div className="pet-image-box">
                            <img className="pet-photo" src="https://vippuppies.com/wp-content/uploads/2019/04/Kurstin-497AEB12-4825-46A6-81E2-6073471430D0.jpeg" alt="bulldog"/>
                        </div>
                        <div className="form-box">
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
                        <input id="submit-button" type="submit" value="Submit"/>
                    </div>
                    {/* <div className="lost-info">
                        <div className="form-box">
                            <div className="calendar">
                                <label className="input-field-label">Date Lost</label>
                                <input type="date" data-date-inline-picker="true" name="calendar" onChange={this.handleChange}/>
                            </div>
                            <div className="comments">
                                <label className="input-field-label">Comments</label>
                                <input type="text" name="comments" onChange={this.handleChange}/>
                            </div>
                            <div className="map-box">
                            </div>
                        </div>
                        <input id="submit-button" type="submit" value="Submit"/>
                    </div> */}
                </form>
            </div>
        )
    }
}

export default LostFoundPage
