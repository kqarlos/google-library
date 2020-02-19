import React, { useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import BookSearch from '../components/BookSearch';
import Results from '../components/Results';
import { useStoreContext } from "../utils/GlobalState";

function Search() {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        console.log("LOADED");
    }, []);

    return (
        <div>
            <Jumbotron />
            <BookSearch />
            <Results results={state.results} button="Save"/>
        </div>
    );

}

export default Search;