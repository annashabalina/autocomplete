import React from 'react';
import './SearchResults.scss';


export const SearchResults = ({results}) => {
    return (
        <div className="search-results-wrapper">
            <div className="top-border"></div>
            <ul className="search-results">
                {
                    results.map((result, index) => {
                        return <li
                            key={index}
                            className="search-result-item"
                        >{result.name}</li>
                    })
                }
            </ul>
        </div>
    )
};

