import React, { useEffect } from 'react';
import Result from './Result';

function Results(props) {

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