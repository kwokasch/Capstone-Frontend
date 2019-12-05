import React from 'react'

export default function PetCard({pet}) {
    const getPhoto = photo => {
        return photo.medium || photo.large || photo.small || photo.full
    }
    
    const firstPhoto = pet.photos && pet.photos[0];

    const petPhoto = () => {
        if(firstPhoto){
            return getPhoto(firstPhoto)
        } else if (pet.pictureUrl){
            return pet.pictureUrl
        } else {
            return 'https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg'
        }
    }
    return (
        <div className="pet-card" key={pet.id}>
            <div className="search-pet-image">
                <img className="search-img" src={petPhoto()} alt="Pet"/>
            </div>
            <div className="search-pet-info">
                <h1>"{pet.name || "Unknown"}"</h1> 
                <h2>{pet.gender || "Unknown"}</h2> 
                { pet.breeds 
                    ? <h2>{pet.breeds.primary || "Unknown"}</h2> 
                    : <h2>{pet.breed || "Unknown"}</h2>
                }
                <h2>{pet.age || "Unknown"}</h2> 
            </div>
        </div>
    )
}