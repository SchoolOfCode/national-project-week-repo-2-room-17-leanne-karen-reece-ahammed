import pg from "pg";

// import {db} from "../config.js"

const pool = new pg.Pool({
    // user : db.user,
    // host : db.host,
    // database : db.database,
    // password : db.password,
    // port : db.port,
    connectionString: "postgres://tfndrvbpnoilkd:ddbcd64f1db2649ddb2bc3c0b55f7dcf7b28752ceb983ddc13a83a60e98f5028@ec2-54-155-194-191.eu-west-1.compute.amazonaws.com:5432/daocrjfvj3k05o",
    ssl : {rejectUnauthorized : false}
})

export default function query(text, params) {
    return pool.query(text, params)
}