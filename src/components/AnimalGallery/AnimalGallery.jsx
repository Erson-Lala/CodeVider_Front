import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AnimalGallery.scss';

const AnimalGallery = ({ animalType }) => {
    const [animals, setAnimals] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/animals?type=${animalType}`);
                setAnimals(response.data);
            } catch (error) {
                console.error('Error fetching animals:', error);
            }
        };
        fetchAnimals();
    }, [animalType]);

    const handleCardClick = (animal) => {
        setSelectedAnimal(animal);
    };

    const handleCloseDetails = () => {
        setSelectedAnimal(null);
    };

    return (
        <div className="animal-gallery">
            {animals.map((animal) => (
                <div key={animal._id} className="animal-card" onClick={() => handleCardClick(animal)}>
                    <img src={animal.image} alt={animal.name} />
                    <h2>{animal.name}</h2>
                    <p>Origin: {animal.origin}</p>
                </div>
            ))}
            {selectedAnimal && (
                <div className="animal-details">
                    <button className="close-btn" onClick={handleCloseDetails}>X</button>
                    <h2>{selectedAnimal.name}</h2>
                    <img src={selectedAnimal.image} alt={selectedAnimal.name} />
                    <p>Origin: {selectedAnimal.origin}</p>
                    <p>Description: {selectedAnimal.description}</p>
                </div>
            )}
        </div>
    );
};

export default AnimalGallery;
