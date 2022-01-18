import express from 'express';
import { getAllUserData, getAllURL, createData, createURL } from '../models/data.js';
var router = express.Router();


/* GET home page. */
router.get('/users', async function(req, res, next) {
  const data =  await getAllUserData();
  res.json({success : true, payload : data})
});

router.get('/url', async function(req, res, next) {
  const data =  await getAllURL();
  res.json({success : true, payload : data})
});

router.post("/users", async function (req, res){
  const body = req.body;
  const create = await createData(body);
  console.log(body);

  res.json({
    success: true,
    message:`Post has been successfully ${body}`,
    payload: create
  })
})

router.post("/url", async function (req, res){
  const body = req.body;
  const create = await createURL(body);

  res.json({
    sucess: true,
    message: `Post has been successfully ${create}`,
    payload: create
  })

})




export default router;
