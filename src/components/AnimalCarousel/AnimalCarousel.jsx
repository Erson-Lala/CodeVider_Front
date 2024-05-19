import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import './AnimalCarousel.scss';

const AnimalCarousel = ({ animalType }) => {
    const [animals, setAnimals] = useState([]);

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

    return (
        <div className="animal-carousel">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                {animals.map((animal) => (
                    <div key={animal._id} className="carousel-slide">
                        <img src={animal.image} alt={animal.name} />
                        <div className="carousel-caption">
                            <h3>{animal.name}</h3>
                            <p>Origin: {animal.origin}</p>
                            <p>{animal.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default AnimalCarousel;
