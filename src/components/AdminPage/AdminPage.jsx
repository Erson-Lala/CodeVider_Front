import React, { useState, useEffect } from 'react';
import AnimalForm from '../AnimalForm/AnimalForm';
import AnimalTable from '../AnimalTable/AnimalTable';
import axios from 'axios';
import './AdminPage.scss';

const AdminPage = () => {
    const [animal, setAnimal] = useState(null);
    const [animals, setAnimals] = useState([]);

    const refreshAnimals = async () => {
        const response = await axios.get('http://localhost:5000/api/animals');
        setAnimals(response.data);
    };

    useEffect(() => {
        refreshAnimals();
    }, []);

    return (
        <div className="admin-page">
            <h1>Admin Page</h1>
            <AnimalForm animal={animal} setAnimal={setAnimal} refreshAnimals={refreshAnimals} />
            <AnimalTable setAnimal={setAnimal} animals={animals} refreshAnimals={refreshAnimals} />
        </div>
    );
};

export default AdminPage;
