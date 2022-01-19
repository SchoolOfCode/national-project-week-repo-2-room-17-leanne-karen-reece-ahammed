import query from "../db/index.js";

export async function getAllUserData() {
  const data = await query(`SELECT * FROM soc`);
  console.log(data)
  return data.rows;
}

export async function getAllURL() {
  const data = await query(`SELECT * FROM post`);
  return data.rows;
}

export async function createData(body) {
  const name = body.name;
  const comments = body.comments;
  const data = await query(
    `INSERT INTO soc (name, comments) VALUES ($1, $2) RETURNING name`,
    [name, comments]
  );
  return data.rows;
}

export async function createURL(body) {
  const url = body.url;
  const data = await query(
    `INSERT INTO post (url) VALUES ($1) RETURNING url)`,
    [url]
  );
  return data.rows;
}
