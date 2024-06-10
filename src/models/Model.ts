import connection from '../config/db';
import { Connection } from "mysql";

export default class Model {
    connection: Connection;

    constructor(dbConnection: Connection | null = null) {
        this.connection = dbConnection || connection;
    }

    public async insert(sqlQuery: string, params: object): Promise<null | any> {
        return new Promise((resolve, reject) => {
            this.connection.query(sqlQuery, params, (err, result) => {
                if (err) {
                    console.error('Error executing query: %s \n error: %s', sqlQuery, err);
                    return reject(err);
                }

                if (result.affectedRows === 0) {
                    return resolve(null);
                }

                return resolve(result.insertId);
            });
        });
    }

    public async query(sqlQuery: string, params: any[]): Promise<null | any> {
        return new Promise((resolve, reject) => {
            this.connection.query(sqlQuery, params, (err, result) => {
                if (err) {
                    console.error('Error retrieving query: %s \n error: %s', sqlQuery, err);
                    return reject(err);
                }

                if (result.length === 0) {
                    return resolve(null);
                }

                return resolve(result);
            });
        });
    }
}