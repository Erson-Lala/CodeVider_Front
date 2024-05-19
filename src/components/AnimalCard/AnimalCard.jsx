import React, { useState } from 'react';
import AnimalDetailsPopup from '../AnimalDetailsPopup/AnimalDetailsPopup';
import './AnimalCard.scss';

const AnimalCard = ({ animal }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className="animal-card" onClick={() => setShowPopup(true)}>
                <img src={animal.image} alt={animal.name} />
                <h3>{animal.name}</h3>
                <p>Origin: {animal.origin}</p>
            </div>
            {showPopup && <AnimalDetailsPopup animal={animal} onClose={() => setShowPopup(false)} />}
        </>
    );
}

export default AnimalCard;
