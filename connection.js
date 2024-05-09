import pg from 'pg';

import {
    DB_USER,
    DB_DATABASE,
    DB_PASSWORD,
    DB_PORT,
    DB_HOST
} from './config.js';

const pool = new pg.Pool({
    user: DB_USER,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: DB_PORT,
    host: DB_HOST
});

export default pool;