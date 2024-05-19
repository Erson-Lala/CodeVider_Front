import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
