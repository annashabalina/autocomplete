import React from 'react';
import './Autocomplete.scss';
import 'font-awesome/css/font-awesome.min.css';

export const Autocomplete = ({searchValue, updateSearchValue}) => {

    return (
        <form>
            <i className="fa fa-search"/>
            <input
                placeholder="Search"
                type="search"
                value={searchValue}
                onChange={updateSearchValue}
                className="autocomplete-input"
                // onChange={(e) => setSearchValue(e.target.value)}
            />
        </form>
    )
};