# Google Books Search

</br>
<p align="center">
    <img src="https://img.shields.io/github/languages/count/kqarlos/google-library?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/kqarlos/google-library?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/kqarlos/google-library?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/kqarlos/google-library?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/kqarlos/google-library?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/google-library/body-parser?style=for-the-badge" alt="body-parser Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/google-library/express?style=for-the-badge" alt="Express Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/google-library/cors?style=for-the-badge" alt="Cors Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/google-library/if-env?style=for-the-badge" alt="if-env Version" />
    <img src="https://img.shields.io/github/last-commit/kqarlos/google-library?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/kqarlos/google-library?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/kqarlos?style=social" alt="Followers" />  
</p>


## Description

Look through Google books and keep a list of your favorites.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Screenshots](#screenshots)
    * [Snippets](#snippets)
* [Credits](#credits)
* [License](#license)



## Installation

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


<p align="center">
    <a href="https://google-library-mern.herokuapp.com/"><img src="https://img.shields.io/badge/-👉 See Live Site-success?style=for-the-badge"  alt="Live Site" /></a>
</p>

## Usage

### Screenshots

1. Live Site

![Site](client/public/live.gif)



### Snippets


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

## Credits 

### Author

- 💼 Carlos Toledo: [portfolio](https://professional-portfolio2020.herokuapp.com/)
- :octocat: Github: [kqarlos](https://www.github.com/kqarlos)
- LinkedIn: [carlos-toledo415](https://www.linkedin.com/in/carlos-toledo415/)


### Built With

</br>
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
    <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
    <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Bootstrap-blue?style=for-the-badge" alt="Bootstrap" /></a>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-Node-orange?style=for-the-badge" alt="Node" /></a>
    <a href="https://www.npmjs.com/package/express"><img src="https://img.shields.io/badge/-Express-green?style=for-the-badge" alt="Express" /></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/-React-blue?style=for-the-badge" alt="React" /></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/-Express-green?style=for-the-badge" alt="MongoDB" /></a>
</p>

## License

</br>
<p align="center">
    <img align="center" src="https://img.shields.io/github/license/kqarlos/google-library?style=for-the-badge" alt="MIT license" />
</p>