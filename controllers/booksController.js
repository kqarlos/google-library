const db = require("../models");


module.exports = {

    findAll: function (req, res) {
        db.find()
            .then(books => res.json(books))
            .catch(err => console.log(err));
    },

    create: function (req, res) {
        console.log("CREATE REQ");
        console.log(req.body);
        db.create(req.body)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        console.log("REMOVE REQ", req.params)
        db.findById({ _id: req.params.id })
            .then(book => book.remove())
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    }
}