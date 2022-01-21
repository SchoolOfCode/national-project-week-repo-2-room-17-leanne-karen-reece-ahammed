import express from "express";
import {
  getAllUserData,
  createData,
  updateSOC,
  deletedSoCById,
  getQuaryByDate,
  getQuaryByName,
  getQuaryById,
 
} from "../models/data.js";
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res) {
  const id = req.query.id;
  const names = req.query.names;
  const created = req.query.created
if(id){
  const searchId = await getQuaryById(id)
  res.json({
    success: true,
    payload: searchId
  });
  return;
}
if(names){
  const searchName = await getQuaryByName(names)
  res.json({
    success: true,
    payload: searchName
  });
  return;
}
if(created){
  const searchDate = await getQuaryByDate(created)
  res.json({
    success: true,
    payload: searchDate
  });
  return;
}
  const data = await getAllUserData();
  res.json({ success: true, payload: data });
});

// router.get("/url", async function (req, res) {
//   const data = await getAllURL();
//   res.json({ success: true, payload: data });
// });

router.post("/", async function (req, res) {
  const body = req.body;
  const create = await createData(body);
  console.log(body);

  res.json({
    success: true,
    message: `Post has been successfully ${body.name}`,
    payload: create,
  });
});

// router.post("/url", async function (req, res) {
//   const body = req.body;
//   const create = await createURL(body);

//   res.json({
//     sucess: true,
//     message: `Post has been successfully url`,
//     payload: create,
//   });
// });

router.put("/:id", async function (req, res) {
  const body = req.body;
  const update = await updateSOC(body);

  res.json({
    sucess: true,
    message: `Update has been successful${update.name}`,
    payload: body,
  });
});


router.delete("/:id", async function (req, res) {
  const id = Number(req.params.id)
  const body = await deletedSoCById(id);
  res.json({
    sucess: true,
    message: `Update has been successful`,
    payload: body,
  });
});

// router.delete("/:id", async function (req, res) {
//   const id = Number(req.params.id)
//   const body = await deletedPostById(id);
//   res.json({
//     sucess: true,
//     message: `Update has been successful${body.id}`,
//     payload: id,
//   });
// });

export default router;