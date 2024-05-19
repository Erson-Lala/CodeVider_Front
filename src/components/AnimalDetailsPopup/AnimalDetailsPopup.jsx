import React from 'react';
import './AnimalDetailsPopup.scss';

const AnimalDetailsPopup = ({ animal, onClose }) => {
    return (
        <div className="popup" onClick={onClose}>
            <div className="popup-inner" onClick={e => e.stopPropagation()}>
                <h2>{animal.name}</h2>
                <img src={animal.image} alt={animal.name} />
                <p><strong>Origin:</strong> {animal.origin}</p>
                <p><strong>Description:</strong> {animal.description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default AnimalDetailsPopup;
