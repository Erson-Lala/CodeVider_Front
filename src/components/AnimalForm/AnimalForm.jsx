import React, { useState } from 'react';
import axios from 'axios';
import './AnimalForm.scss';

const AnimalForm = ({ animal, setAnimal, refreshAnimals }) => {
  const [formData, setFormData] = useState({
    type: animal?.type || '',
    name: animal?.name || '',
    origin: animal?.origin || '',
    description: animal?.description || '',
    image: animal?.image || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (animal) {
      await axios.put(`http://localhost:5000/api/animals/${animal._id}`, formData);
    } else {
      await axios.post('http://localhost:5000/api/animals', formData);
    }
    setAnimal(null);
    refreshAnimals();
  };

  return (
    <form className="animal-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={formData.type}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="origin"
        placeholder="Origin"
        value={formData.origin}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <div className="button-container">
        <button type="submit">{animal ? 'Update Animal' : 'Create Animal'}</button>
      </div>
    </form>
  );
};

export default AnimalForm;
