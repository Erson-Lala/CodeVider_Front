import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AnimalGallery from './components/AnimalGallery/AnimalGallery';
import AdminPage from './components/AdminPage/AdminPage';
import './App.scss';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cats" element={<AnimalGallery animalType="cats" />} />
                    <Route path="/dogs" element={<AnimalGallery animalType="dogs" />} />
                    <Route path="/birds" element={<AnimalGallery animalType="birds" />} />
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
