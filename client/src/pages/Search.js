import React, { useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import BookSearch from '../components/BookSearch';
import Results from '../components/Results';

function Search() {

    useEffect(() => {
        console.log("LOADED");
    }, []);

    return (
        <div>
            <Jumbotron />
            <BookSearch />
            <Results />
        </div>
    );

}

export default Search;