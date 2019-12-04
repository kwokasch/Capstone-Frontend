import React, { Component } from 'react'
import '../stylesheets/SearchPage.css'
import PetCard from '../components/PetCard'
import SearchForm from '../components/SearchForm'

const BASE_URL = "http://localhost:3000"

export default class SearchPage extends Component {
    state = {
        allPets: [],
        localPets: []
    }


    async componentDidMount(){
        const response = await fetch(`${BASE_URL}/petfinder`)
        const localResponse = await fetch(`${BASE_URL}/pets`)
        const allPets = await response.json()
        const localPets = await localResponse.json()
        const reverseLocalPets = localPets.reverse()
        
        this.setState({ 
            allPets: [...reverseLocalPets, ...allPets]
        })
    }   

    searchResults = (result) => {
        this.setState({
            allPets: result
        })
    }
  
    render() {
        console.log('this.state.allPets', this.state.allPets)
        return (
            <div className="search-page">
                <SearchForm searchResults={this.searchResults}/>
                <div className="card-container"> 
                {this.state.allPets.map(pet => {
                    console.log(pet)
                    return <PetCard pet={pet} key={pet.id}/>
                })}   
                </div>
            </div>
        )
    }
}
