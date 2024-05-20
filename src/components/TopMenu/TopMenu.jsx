import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopMenu.scss';

const TopMenu = () => {
    return (
        <nav className="top-menu">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cats">Cats</NavLink></li>
                <li><NavLink to="/dogs">Dogs</NavLink></li>
                <li><NavLink to="/birds">Birds</NavLink></li>
                <li><NavLink to="/admin">Admin</NavLink></li>
            </ul>
        </nav>
    );
};

export default TopMenu;
