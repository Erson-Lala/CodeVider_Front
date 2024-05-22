import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnimalForm.scss';

const AnimalForm = ({ animal, setAnimal, refreshAnimals }) => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    origin: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (animal) {
      setFormData({
        type: animal.type || '',
        name: animal.name || '',
        origin: animal.origin || '',
        description: animal.description || '',
        image: animal.image || '',
      });
    }
  }, [animal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (animal) {
      // Update existing animal
      await axios.put(`http://localhost:5000/api/animals/${animal._id}`, formData);
    } else {
      // Create new animal
      await axios.post('http://localhost:5000/api/animals', formData);
    }
    setFormData({
      type: '',
      name: '',
      origin: '',
      description: '',
      image: '',
    });
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
      <button type="submit">{animal ? 'Update Animal' : 'Create Animal'}</button>
    </form>
  );
};

export default AnimalForm;
