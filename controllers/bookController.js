import Book from '../models/book.js';
import { bookSchema } from '../validators/bookValidator.js';
import {response, success, error }from '../helper/response.js';

export const getBooks = async (req, res, next) => {
  try {
    const [books] = await Book.getAll();
    //res.json(response(200, "Ok",books));
    success(res, "Ok", books)
    
  } catch (err) {
    next(err);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const [books] = await Book.getById(req.params.id);
    response.success
    res.json({
      code: 200,
      message: "Ok",
      data: books[0]
    }
      );
  } catch (err) {
    console.log("terjadi error: " + err.message)
    next(err);
  }
};

export const createBook = async (req, res, next) => {
  try {
    const value = await bookSchema.validateAsync(req.body);
    const [result] = await Book.create(value);
    res.json({ message: 'Book created successfully!', bookId: result.insertId });
  } catch (err) {
    next(err);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const value = await bookSchema.validateAsync(req.body);
    await Book.update(req.params.id, value);
    res.json({ message: 'Book updated successfully!' });
  } catch (err) {
    next(err);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    await Book.delete(req.params.id);
    res.json({ message: 'Book deleted successfully!' });
  } catch (err) {
    next(err);
  }
};