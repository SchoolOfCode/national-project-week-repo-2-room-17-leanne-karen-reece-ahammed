import query from "../db/index.js";

export async function getAllUserData() {
  const data = await query(`SELECT * FROM soc`);
  console.log(data)
  return data.rows;
}

export async function createData(body) {
  const name = body.name;
  const feeling = body.feeling;
  const reflection = body.reflection;
  const workShop = body.workShop;
  const url = body. url
  const data = await query(`INSERT INTO soc (name,
    feeling, reflection, workshop, url ) VALUES ($1 , $2, $3, $4, $5) 
    RETURNING name`, [name,feeling, reflection, workShop, url]);
  return data.rows;
}

export async function updateSOC(body) {
  const name = body.name;
  const reflection = body.reflection;
  const id = body.id;
  const data = await query(`UPDATE soc SET name = $1, reflection = $2 WHERE id = $3 RETURNING name;`,
  [name, reflection, id]);
  return data.rows;
  }

  export async function deletedSoCById(id) {
    const data = await query(`DELETE FROM soc WHERE id = $1;`, [id]);
    return data.rows;
  }


// export async function getAllURL() {
//   const data = await query(`SELECT * FROM post`);
//   return data.rows;
// }

// export async function createURL(body) {
//   const url = body.url;
//   const data = await query(
//     `INSERT INTO post (url) VALUES ($1) RETURNING url)`,
//     [url]
//   );

//   return data.rows;
// }



// export async function updatePost(body) {
//   const URL = body.URL;
//   const id = body.id;
//   const data = await query(`UPDATE post SET url = $1 WHERE id = $2 RETURNING url;`,
//   [URL, id]);
//   return data.rows;
// }
  


// export async function deletedPostById(id) {
//   const data = await query(`DELETE FROM post WHERE id = $1;`, [id]);

//   return data.rows;
// }
