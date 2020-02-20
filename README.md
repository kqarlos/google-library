# Google Books Search

## Site Pictures

1. Live Site

![Site](client/public/live.gif)



## Code Snippets


1. Book Search

```javascript

    function search(e) {
        e.preventDefault();
        API.getGoogleBooks(inputRef.current.value).then(res => {
            var books = res.data.items.map(book => {
                return ({
                    authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(" ") : "",
                    description: book.volumeInfo.description ? book.volumeInfo.description : "",
                    image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "",
                    link: book.volumeInfo.previewLink ? book.volumeInfo.previewLink : "",
                    title: book.volumeInfo.title ? book.volumeInfo.title : "",
                    date: book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : ""
                });
            });
            dispatch({
                type: SET_SEARCH_RESULTS,
                searchResults: books
            });
        });
    }

    
```
* The _search()_ function is called in the _Search_ page when the user submits the search form. The function _API.getGoogleBooks()_ calls the Google Books API. This query returns and array of 10 books related to the user's input. The user's input is being tracked by _const inputRef = useRef()_ place on the input element. The result that we get from the API call gets mapped into an array of books that follow the Book model format required by the database. This new array is then used to update the global state and display the results to the user.



2. Get all saved books

```javascript

    useEffect(() => {
        API.getAll().then(res => {
            dispatch({
                type: SET_SAVED_RESULTS,
                savedResults: res.data
            });
        })
    }, []);

```
* This function runs as soon as the _Saved Books_ page loads. It calls _API.getAll()_ function. This function goes into the database and get all the books that have been saved by the user. _res.data_ contains an array of books returned by the _getAll()_ function. This is used to update the global state and display these books to the user.

## Available Scripts for cloned repos

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [Handlebars](https://handlebarsjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [React](https://reactjs.org/)



## Deployed Link

* [See Live Site](https://afternoon-fortress-59314.herokuapp.com/)

## Author

 * **Carlos Toledo** 

## Links

- [Link to site repository](https://github.com/kqarlos/google-library)
- [Link to Github](https://www.github.com/kqarlos)
- [Link to LinkedIn](https://www.linkedin.com/in/carlos-toledo415/)

