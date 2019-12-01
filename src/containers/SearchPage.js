import React, { Component } from 'react'
import '../stylesheets/SearchPage.css'
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
    }   

    searchResults = (result) => {
        this.setState({
            allPets: result
        })
    }
  
    render() {
        return (
            <div className="search-page">
                <SearchForm searchResults={this.searchResults}/>
                <div className="card-container"> 
                    {this.state.allPets.map(pet => <PetCard pet={pet}/>)}   
                </div>
            </div>
        )
    }
}
