import mysql from "mysql2"
import migrations from "mysql-migrations"

const connection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'mauFJcuf5dhRMQrjj',
    database: 'book-api'
});

migrations.init(connection, `${__dirname}/migrations`);