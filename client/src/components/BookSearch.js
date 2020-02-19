import React, { useRef } from 'react';

function BookSearch() {
    const inputRef = useRef();

    function search(book) {
        console.log("SEARCHING", book);
    }
    return (
        <form className="container" onSubmit={search(inputRef)}>
            <div className="form-group">
                <h2>
                    <label htmlFor="query">Book Search</label>
                </h2>
                <h5>
                    <label htmlFor="query">Book</label>
                </h5>
                <input ref={inputRef} type="text" className="form-control" id="query" placeholder="Enter Book" />
            </div>
        </form>
    );

}

export default BookSearch;