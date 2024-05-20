// AnimalGallery.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnimalGallery.scss';

const AnimalGallery = ({ animalType }) => {
    const [animals, setAnimals] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchAnimals = async () => {
            const response = await axios.get(`http://localhost:5000/api/animals?type=${animalType}`);
            setAnimals(response.data);
        };
        fetchAnimals();
    }, [animalType]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredAnimals = animals.filter(animal =>
        animal.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="animal-gallery">
            <h1>{animalType} Gallery</h1>
            <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={handleSearch}
                className="search-input"
            />
            <div className="gallery">
                {filteredAnimals.map((animal, index) => (
                    <div key={index} className="card">
                        <img src={animal.image} alt={animal.name} />
                        <h2>{animal.name}</h2>
                        <p>{animal.origin}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimalGallery;
