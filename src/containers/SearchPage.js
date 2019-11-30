import React, { Component } from 'react'
import PetCard from '../components/PetCard'
import SearchForm from '../components/SearchForm'

const BASE_URL = "http://localhost:3000"

export default class SearchPage extends Component {
    state = {
        allPets: []
    }

    async componentDidMount(){
        const response = await fetch(`${BASE_URL}/petfinder`)
        const data = await response.json()
        this.setState({ allPets: data })
        console.log(this.state.allPets)
    }   
  
    render() {
        return (
            <div className="card-container">
                <SearchForm />
                <PetCard allPets={this.state.allPets}/>
            </div>
        )
    }
}
