import query from "../db/index.js";

export async function getAllUserData(){
    const data = await query(`SELECT * FROM soc`);
    return data.rows;
}

export async function createData(body){
    const name = body.name;
    const comments = body.comments;
    const timestamp = body.timestamp;
    const data = await query(`INSERT INTO soc (name, comments, timestamp) VALUES ($1, $2, $3} RETURNING name)`, [name, comments, timestamp])
    return data.rows;
}