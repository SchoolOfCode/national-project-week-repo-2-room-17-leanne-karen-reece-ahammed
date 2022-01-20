import query from "../index.js"


const SQLString = `CREATE TABLE IF NOT EXISTS soc (
    id SERIAL PRIMARY KEY,
    name TEXT,
    feeling INTEGER,
    reflection TEXT,
    workshop INTEGER,
    url TEXT,
    created timestamp not null default CURRENT_TIMESTAMP
    )`

async function createTable(){
    const res = await query(SQLString);
    console.log("Table created!", res)
    }

createTable();