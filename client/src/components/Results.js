import React, { useEffect } from 'react';
import Result from './Result';
import { useStoreContext } from "../utils/GlobalState";

function Results(props) {
    // const [state, dispatch] = useStoreContext();

    return (
        <div className="container my-4">
            <div>
                {
                    props.results.map((result, index) => {
                        return <Result key={index} index={index + 1} result={result} button={props.button}/>
                    })
                }
            </div>
        </div>
    );

}

export default Results;