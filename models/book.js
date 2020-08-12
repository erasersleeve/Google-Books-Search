const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: { type: String },
  date: { type: Date, default: Date.now },
  link: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
