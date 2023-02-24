import React from "react";
import './Style/Searchbox.css'

const SearchBox = ({searchChange}) => {
    return(
        <div className="search-box">
        <div className='input-container'>
            <input 
                type="search"
                placeholder='Search...' 
                className='searchInput'
                onChange = {searchChange}
            />
        </div>
    </div>
    );
}

export default SearchBox;