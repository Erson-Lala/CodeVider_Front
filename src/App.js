import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AnimalGallery from './components/AnimalGallery/AnimalGallery';
import AdminPage from './components/AdminPage/AdminPage';
import TopMenu from './components/TopMenu/TopMenu';
import './App.scss';

const App = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className="App">
            {!isHomePage && <TopMenu />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cats" element={<AnimalGallery animalType="Cat" />} />
                <Route path="/dogs" element={<AnimalGallery animalType="Dog" />} />
                <Route path="/birds" element={<AnimalGallery animalType="Bird" />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
