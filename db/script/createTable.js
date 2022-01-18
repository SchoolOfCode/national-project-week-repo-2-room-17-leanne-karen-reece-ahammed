import query from "../index.js"

const date = new Date();


const SQLString = `CREATE TABLE IF NOT EXISTS soc (
    id SERIAL PRIMARY KEY,
    name TEXT NULL,
    comments TEXT NOT NULL,
    created timestamp not null default CURRENT_TIMESTAMP
    )`

async function createTable(){
    const res = await query(SQLString);
    console.log("Table created!", res)
    }

    createTable();