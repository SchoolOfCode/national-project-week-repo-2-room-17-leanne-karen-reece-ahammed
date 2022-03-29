import pg from "pg";
import {db} from "../config.js"


export const pool = new pg.Pool({
    connectionString: db.database,
    //call this connection as connectionString otherwise it wont connect to heroku database
    ssl: {rejectUnauthorized: false}
});


export default function query (text, params){

    return pool.query(text, params)
}


