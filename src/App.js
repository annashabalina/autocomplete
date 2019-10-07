import React, {useEffect, useState} from 'react';
import './App.scss';
import {SearchResults} from './components/searchResults/SearchResults';
import {Autocomplete} from "./components/autocomplete/Autocomplete";


function App() {
    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const updateSearchValue = function (e) {
        setSearchValue(e.target.value);
    };

    useEffect(() => {

        async function f() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            const users = await response.json();
            setResults(users);
        }

        f()

    }, []);

    useEffect(() => {
        const filteredResults = searchValue ? results.filter(result => result.name.includes(searchValue)) : [];

        setFilteredResults(filteredResults);
    }, [searchValue]);


    return (
        <div className="App">
            <div className="display-input">
                <Autocomplete
                    searchValue={searchValue}
                    updateSearchValue={updateSearchValue}/>
                {filteredResults.length > 0 && <SearchResults results={filteredResults}/>}

            </div>
        </div>
    );
}

export default App;
