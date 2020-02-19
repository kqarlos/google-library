import axios from "axios";

export default {

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