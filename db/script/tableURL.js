import query from "../index.js"


const SQLString = `CREATE TABLE IF NOT EXISTS post (
    post_id SERIAL PRIMARY KEY,
    author INTEGER REFERENCES soc(id),
    created timestamp not null default CURRENT_TIMESTAMP,
    url TEXT
    )`

async function urlTable(){
    const res = await query(SQLString);
    console.log("Table created!", res)
    }

    //urlTable();