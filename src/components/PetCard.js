import React from 'react'

export default function PetCard({pet}) {
    const getPhoto = photo => {
        return photo.medium || photo.large || photo.small || photo.full
    }

    const colors = Object.values(pet.colors)
    const filteredColors = colors.filter(color => color)
    const allColors = filteredColors.join(', ')
    
    const postalCode = pet.contact && pet.contact.address && pet.contact.address.postcode;
    const firstPhoto = pet.photos && pet.photos[0];
    const petPhoto = firstPhoto ? getPhoto(firstPhoto) : 'https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg'

    return (
        <div className="pet-card" key={pet.id}>
            <div className="search-pet-image">
                <img className="search-img" src={petPhoto} alt="Pet"/>
            </div>
            <div className="search-pet-info">
                <h1>{pet.name}</h1> 
                {/* <h1>Species: {pet.species}</h1>  */}
                <h1>Gender: {pet.gender}</h1> 
                <h1>Primary Breed: {pet.breeds.primary || "Unknown"}</h1> 
                {/* <h1>Size: {pet.size}</h1>  */}
                <h1>Colors: {allColors || "Unknown"}</h1> 
                <h1>Age: {pet.age}</h1> 
                {/* <h1>Postal Code: {postalCode || "Unknown"}</h1>  */}
            </div>
        </div>
    )
}