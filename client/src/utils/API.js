import axios from "axios";

export default {

    //google api requests
    getGoogleBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },
    //server api requests
    getAll: function () {
        return axios.get("api/books");
    },
    save: function (book) {
        return axios.post("api/books", book);
    },
    delete: function (_id) {
        return axios.delete("api/users/" + _id);
    }
}