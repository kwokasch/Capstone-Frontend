import React, { Component } from 'react'
import '../stylesheets/SearchPage.css'

const BASE_URL = "http://localhost:3000"

export default class SearchForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchCriteria: {
                name: "",
                species: "",
                gender: "",
                size: "",
                color: "",
                age: "",
                breed: "",
                location: ""
            }
        }
    }
    

    handleChange = event => {
        const searchCriteria = this.state.searchCriteria
        searchCriteria[event.target.name] = event.target.value
        this.setState({ searchCriteria })
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(`${BASE_URL}/petfinder/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.searchCriteria)
        }).then(response => response.json())
        .then(this.props.searchResults)
    }

    render() {
        return (
            <div className="search-form-box">
                <form onSubmit={this.handleSubmit} className="search-info-form-box">
                    <h2>Search:</h2>
                    <div className="search-input-field">
                        <label className="search-input-field-label">Name</label>
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </div>
                    <div className="search-input-field">
                        <label className="search-input-field-label">Species</label>
                        <input type="text" name="species" onChange={this.handleChange}/>
                    </div>
                    <div className="search-input-field">
                        <label className="search-input-field-label">Gender</label>
                        <input type="text" name="gender" onChange={this.handleChange}/>
                    </div>
                    <div className="search-input-field">
                        <label className="search-input-field-label">Size</label>
                        <input type="text" name="size" onChange={this.handleChange}/>
                    </div>
                    <div className="search-input-field">
                        <label className="search-input-field-label">Color</label>
                        <input type="text" name="color" onChange={this.handleChange}/>
                    </div>
                    <div className="search-input-field">
                        <label className="search-input-field-label">Age</label>
                        <input type="text" name="age" onChange={this.handleChange}/>
                    </div>
                    <div className="search-input-field">
                        <label className="search-input-field-label">Breed</label>
                        <input type="text" name="breed" onChange={this.handleChange}/>
                    </div>
                    <div className="search-input-field">
                        <label className="search-input-field-label">Postal Code</label>
                        <input type="text" name="location" onChange={this.handleChange}/>
                    </div>
                    <div className="submit-button-holder">
                        <input id="submit-button" type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}