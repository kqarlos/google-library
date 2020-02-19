const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creates schema
const bookSchema = new Schema({
  title:  String, 
  author: String,
  picture:   String,
  description: String,
  link: String
});

//models schema
const Book = mongoose.model('Book', bookSchema);

//exports model
module.exports = Book;

