import React from 'react';
import Result from './Result';
import { useStoreContext } from "../utils/GlobalState";

function Results(props) {
    const [state, dispatch] = useStoreContext();

    return (
        <div className="container">
            <h3>{props.title}</h3>
            <div>
                {
                    state.results.map((result, index) => {
                        return <Result key={index} result={result} />
                    })
                }
            </div>
        </div>
    );

}

export default Results;