import query from "../index.js"
import data from "../../dummyURL.js"

async function populateURL(){
    for(let i = 0; i < data.length; i++){
    const url = data[i].url;
   
    const res = await query(`INSERT INTO post (url) VALUES ($1) RETURNING url`, [url])
        console.log(res);
    }
}

populateURL();