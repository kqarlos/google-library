const router = require("express").Router();
const booksController = require("../controllers/booksController");
// const path = require("path");

//Should return all books
router.route("/api/books").get(booksController.findAll);

//Should save a new book
router.route("/api/books").post(booksController.create);

//should delete a book
router.route("/api/books/:id").delete(booksController.remove);

// router.route("/*").get(function (req, res) {
//     res.sendFile(path.join(__dirname, "/"));
// });

module.exports = router;