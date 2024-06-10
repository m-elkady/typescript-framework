import mysql, { Connection } from 'mysql';
import 'dotenv/config'

const connection: Connection = mysql.createConnection({
  host: 'db',
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const connect = () => {
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });
}

export default connection;