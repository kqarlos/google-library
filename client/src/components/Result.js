import React from 'react';

function Result({result}) {


    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{result.title}</h4>
                <h5 className="card-subtitle">{result.subtitle}</h5>
                <h6 className="card-subtitle text-muted">{result.author}</h6>
                <div className="d-flex">
                    <img className="img" src={result.src} alt=""/>
                    <p className="card-text">{result.description}</p>
                </div>
            </div>
        </div>
    );

}

export default Result;