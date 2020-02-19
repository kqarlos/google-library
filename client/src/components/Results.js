import React, { useEffect } from 'react';
import Result from './Result';
import { useStoreContext } from "../utils/GlobalState";

function Results(props) {
    const [state, dispatch] = useStoreContext();

    return (
        <div className="container my-4">
            <div>
                {
                    state.results.map((result, index) => {
                        return <Result key={index} index={index+1} result={result} />
                    })
                }
            </div>
        </div>
    );

}

export default Results;