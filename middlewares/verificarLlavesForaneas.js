import pool from '../connection.js';

export const checkForeignKeyExists = (table = '', column = '') => {
    return async(value) => {
        const {rowCount} = await pool.query(`SELECT * FROM ${table} WHERE ${column} = $1`, [value]);
        if(rowCount === 0){
            return Promise.reject(`La llave foranea ${value} no existe en la tabla ${table}`);
        }

        return Promise.resolve();
    };
};