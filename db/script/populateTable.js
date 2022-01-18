import query from "../index.js"
import dummy from "../../dummydata.js"

async function populateTable(){
    for(let i = 0; i < dummy.length; i++){
    const name = dummy[i].name;
    const comments = dummy[i].comments;
    const res = await query(`INSERT INTO soc (name,
        comments) VALUES ($1 , $2) RETURNING name`, [name,
            comments])
        console.log(res);
    }
}

//populateTable();