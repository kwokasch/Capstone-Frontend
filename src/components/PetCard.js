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
            <img src={petPhoto} alt="Pet"/>
            <h1>Name: {pet.name}</h1> 
            <h1>Species: {pet.species}</h1> 
            <h1>Gender: {pet.gender}</h1> 
            <h1>Primary Breed: {pet.breeds.primary || "Unknown"}</h1> 
            <h1>Size: {pet.size}</h1> 
            <h1>Colors: {allColors || "Unknown"}</h1> 
            <h1>Age: {pet.age}</h1> 
            <h1>Postal Code: {postalCode || "Unknown"}</h1> 
        </div>
    )
}

// age: "Baby"
// attributes: {spayed_neutered: true, house_trained: false, declawed: null, special_needs: false, shots_current: false}
// breeds: {primary: "Cattle Dog", secondary: "Mixed Breed", mixed: true, unknown: false}
// coat: null
// colors: {primary: null, secondary: null, tertiary: null}
// contact: {email: "dawgboss@gmail.com", phone: "505-753-8662", address: {…}}
// description: null
// distance: null
// environment: {children: null, dogs: null, cats: null}
// gender: "Female"
// id: 46726880
// name: "Julie"
// organization_id: "NM08"
// photos: []
// published_at: "2019-12-01T19:06:25+0000"
// size: "Medium"
// species: "Dog"
// status: "adoptable"
// status_changed_at: "2019-12-01T19:06:25+0000"
// tags: []
// type: "Dog"
// url: "https://www.petfinder.com/dog/julie-46726880/nm/espanola/espanola-valley-humane-society-nm08/?referrer_id=910ec99f-98b5-49f2-a7cf-30ec62ef52ee"
// _links: {self: {…}, type: {…}, organization: {…}}