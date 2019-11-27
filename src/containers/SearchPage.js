import React, { Component } from 'react'
import PetCard from '../components/PetCard'

const BASE_URL = "http://localhost:3000"

export class SearchPage extends Component {
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
                {/* <PetCard allPets={this.state.allPets}/> */}
            </div>
        )
    }
}

export default SearchPage
