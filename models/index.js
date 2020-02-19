const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creates schema
const bookSchema = new Schema({
  title: String,
  authors: String,
  image: String,
  description: String,
  link: String,
  date: String
});

//models schema
const Book = mongoose.model('Book', bookSchema);

//exports model
module.exports = Book;

