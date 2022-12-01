import React from 'react';

const SearchBar = () => {
    return (
        <div className="container row" id="search-bar">
            <div className="main-search-input-wrap">
                <div className="main-search-input fl-wrap">
                    <div className="main-search-input-item">
                        <input type="text"  value="" placeholder="Search Products..."/>
                    </div>                                           
                    <button className="main-search-button" variant="info">Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;