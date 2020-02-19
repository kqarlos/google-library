import React from 'react';
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";



function Result({index, result}) {
    const [state, dispatch] = useStoreContext();

    function save(e) {
        e.preventDefault();
        console.log("SAVING", result);
    }

    return (
        <div className="card my-3">
            <div className="card-body">
                <h4 className="card-title py-1">{index}. {result.title}</h4>
                <h5 className="card-subtitle py-1">Published Date: {result.date}</h5>
                <h6 className="card-subtitle text-muted py-1">Author(s): {result.authors.join(" ")}</h6>
                <div className="d-flex">
                    <img className="img py-1" src={result.image} alt=""/>
                    <p className="card-text py-1 px-2">{result.description}</p>
                </div>
                <button type="submit py-1" className="btn btn-primary" onClick={(e) => save(e)}>Save</button>

            </div>
        </div>
    );

}

export default Result;