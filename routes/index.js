const router = require("express").Router();
const booksController = require("../controllers/booksController");

//Should return all books
router.route("/api/books").get(booksController.findAll);

//Should save a new book
router.route("/api/books").post(booksController.create);

//should delete a book
router.route("/api/books/:id").delete(booksController.remove);

module.exports = router;