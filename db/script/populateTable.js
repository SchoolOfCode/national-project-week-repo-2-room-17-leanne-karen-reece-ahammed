import query from "../index.js"
import dummy from "../../dummydata.js"

async function populateTable(){
    for(let i = 0; i < dummy.length; i++){
    const name = dummy[i].name;
    const feeling  = dummy[i].feeling;
    const reflection = dummy[i].reflection;
    const workshop = dummy[i].workshop;
    const url = dummy[i].url

    const res = await query(`INSERT INTO soc (name,
        feeling, reflection, workshop, url ) VALUES ($1 , $2, $3, $4, $5) 
        RETURNING name`, [name,feeling, reflection, workshop, url])
        console.log(res);
    }
}

populateTable();