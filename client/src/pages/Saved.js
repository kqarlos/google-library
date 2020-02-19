import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Results from '../components/Results';
import { useStoreContext } from "../utils/GlobalState";


function Saved() {
    const [state, dispatch] = useStoreContext();


    return (
        <div>
            <Jumbotron />
            <Results results={state.saved} />
        </div>
    );

}

export default Saved;