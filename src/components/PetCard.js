import React from 'react'

export default function PetCard(props) {
    props.allPets.map(pet => {
        return (
            <div>
                <h1>{pet}</h1>
            </div>
        )
    })
}
