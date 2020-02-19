const db = require("../models");


module.exports = {

    findAll: function (req, res) {
        db.Book.find()
            .then(books => res.json(books))
            .catch(err => console.log(err));
    },

    create: function (req, res) {
        db.Book.create(req.body)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.Book.findById({ _id: req.params.id })
            .then(book => book.remove())
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    }
}