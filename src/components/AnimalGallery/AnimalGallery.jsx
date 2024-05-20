import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnimalGallery.scss';

const AnimalGallery = ({ animalType }) => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAnimals = async () => {
      const response = await axios.get(`http://localhost:5000/api/animals?type=${animalType}`);
      setAnimals(response.data);
    };
    fetchAnimals();
  }, [animalType]);

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animal-gallery">
      <input
        className="search-bar"
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="gallery">
        {filteredAnimals.map((animal) => (
          <div key={animal._id} className="card">
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
