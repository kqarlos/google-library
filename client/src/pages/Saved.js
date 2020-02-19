import React, { useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import Results from '../components/Results';
import { useStoreContext } from "../utils/GlobalState";
import API from '../utils/API';
import { SET_SAVED_RESULTS } from '../utils/actions';



function Saved() {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        API.getAll().then(res => {
            console.log(res.data);
            dispatch({
                type: SET_SAVED_RESULTS,
                savedResults: res.data
            });
        })
    }, []);


    return (
        <div>
            <Jumbotron />
            <Results results={state.saved} button="Delete" />
        </div>
    );

}

export default Saved;