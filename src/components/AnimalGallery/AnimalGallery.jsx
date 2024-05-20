import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnimalGallery.scss';

const AnimalGallery = ({ animalType }) => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState(null);

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

  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleCloseModal = () => {
    setSelectedAnimal(null);
  };

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
          <div key={animal._id} className="card" onClick={() => handleCardClick(animal)}>
            <img src={animal.image} alt={animal.name} />
            <h2>{animal.name}</h2>
            <p>{animal.origin}</p>
          </div>
        ))}
      </div>

      {selectedAnimal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedAnimal.image} alt={selectedAnimal.name} />
            <h2>{selectedAnimal.name}</h2>
            <p><strong>Origin:</strong> {selectedAnimal.origin}</p>
            <p><strong>Description:</strong> {selectedAnimal.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalGallery;
