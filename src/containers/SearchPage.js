import React, { Component } from 'react'

export class SearchPage extends Component {
    state = {
        allPets: []
    }
    
    // componentDidMount

    render() {
        return (
            <div>
                <div className="card-container">
                    {this.props.allPets}
                </div>
            </div>
        )
    }
}

export default SearchPage
