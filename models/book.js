import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mauFJcuf5dhRMQrjj',
    database: 'book-api'
});

class Book {
    static getAll() {
        return pool.query('SELECT * FROM books');
    };

    static getById(id) {
        return pool.query('SELECT * FROM books WHERE id = ?', [id]);
      }
    
    static create({ kategori_id, judul, penulis }) {
        return pool.query('INSERT INTO books (kategori_id, judul, penulis) VALUES (?, ?, ?)', [kategori_id, judul, penulis]);
      }
    
      static update(id, { kategori_id, judul, penulis }) {
        return pool.query('UPDATE books SET kategori_id = ?, judul = ?, penulis = ? WHERE id = ?', [kategori_id, judul, penulis, id]);
      }
    
      static delete(id) {
        return pool.query('DELETE FROM books WHERE id = ?', [id]);
      }
}

export default Book;