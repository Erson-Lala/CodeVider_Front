import React from 'react';
import axios from 'axios';
import './AnimalTable.scss';

const AnimalTable = ({ animals, setAnimal, refreshAnimals }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/animals/${id}`);
    refreshAnimals();
  };

  return (
    <table className="animal-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Origin</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal) => (
          <tr key={animal._id}>
            <td>{animal.type}</td>
            <td>{animal.name}</td>
            <td>{animal.origin}</td>
            <td>{animal.description}</td>
            <td>
              <img src={animal.image} alt={animal.name} />
            </td>
            <td className="actions">
              <button onClick={() => setAnimal(animal)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(animal._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnimalTable;
