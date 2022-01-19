import express from "express";
import {
  getAllUserData,
  getAllURL,
  createData,
  createURL,
  updateSOC,
  deletedSoCById,
  deletedPostById,
} from "../models/data.js";
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res) {
  const data = await getAllUserData();
  res.json({ success: true, payload: data });
});

router.get("/url", async function (req, res) {
  const data = await getAllURL();
  res.json({ success: true, payload: data });
});

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

router.post("/url", async function (req, res) {
  const body = req.body;
  const create = await createURL(body);

  res.json({
    sucess: true,
    message: `Post has been successfully url`,
    payload: create,
  });
});

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

router.delete("/:id", async function (req, res) {
  const id = Number(req.params.id)
  const body = await deletedPostById(id);
  res.json({
    sucess: true,
    message: `Update has been successful${body.id}`,
    payload: id,
  });
});

export default router;