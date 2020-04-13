import React, { Component } from 'react'
import '../stylesheets/SearchPage.css'
import PetCard from '../components/PetCard'
import SearchForm from '../components/SearchForm'

const BASE_URL = "https://homeward-bound-new.herokuapp.com/"

export default class SearchPage extends Component {
    state = {
        allPets: [],
        filteredPets: [],
        localPets: [],
        petFinderPets: []
    }

    async componentDidMount(){
        const localResponse = await fetch(`${BASE_URL}/pets`)
        const response = await fetch(`${BASE_URL}/petfinder`)
        const petFinderPets = await response.json()
        const localPets = await localResponse.json()
        const reverseLocalPets = localPets.reverse()
        
        this.setState({ 
            localPets: reverseLocalPets, 
            petFinderPets
        })
    }   

    searchResults = (result) => {
        this.setState({
            petFinderPets: result
        })
    }
  
    filterResults = (result) => {
        this.setState({
            filteredPets: result
        })
    }
  
    render() {
        let allPets
        if(this.state.filteredPets.length > 0) {
            allPets = [...this.state.filteredPets, ...this.state.petFinderPets]
        } else {
            allPets = [...this.state.localPets, ...this.state.petFinderPets]
        }

        return (
            <div className="search-page">
                <SearchForm localPets={this.state.localPets} filterResults={this.filterResults} searchResults={this.searchResults}/>
                <div className="card-container"> 
                { allPets.map(pet => {
                        return <PetCard pet={pet} key={pet.id}/>
                    })  
                } 
                </div>
            </div>
        )
    }
}
