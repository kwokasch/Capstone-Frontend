import React from 'react'

export default function PetCard({pet}) {
    const getPhoto = photo => {
        return photo.medium || photo.large || photo.small || photo.full
    }

    // const colors = Object.values(pet.colors)
    // const filteredColors = colors.filter(color => color)
    // const allColors = filteredColors.join(', ')
    
    const firstPhoto = pet.photos && pet.photos[0];
    const petPhoto = firstPhoto ? getPhoto(firstPhoto) : 'https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg'

    return (
        <div className="pet-card" key={pet.id}>
            <div className="search-pet-image">
                <img className="search-img" src={petPhoto} alt="Pet"/>
            </div>
            <div className="search-pet-info">
                <h2>{pet.name}</h2> 
                <h2>{pet.gender}</h2> 
                <h2>{pet.breeds.primary || "Unknown"}</h2> 
                <h2>{pet.age}</h2> 
            </div>
        </div>
    )
}