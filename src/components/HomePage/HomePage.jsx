import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="hero">
                <h1>Welcome to the Pet Expo</h1>
                <p>Your one-stop destination for everything pets!</p>
            </div>
            <div className="circular-menu">
                <div className="menu-center">Menu</div>
                <NavLink to="/cats" className="menu-item cats">Cats</NavLink>
                <NavLink to="/dogs" className="menu-item dogs">Dogs</NavLink>
                <NavLink to="/birds" className="menu-item birds">Birds</NavLink>
                <NavLink to="/admin" className="menu-item admin">Admin</NavLink>
            </div>
            <div className="content">
                <AboutUs />
                <ContactUs />
            </div>
        </div>
    );
}

export default HomePage;
