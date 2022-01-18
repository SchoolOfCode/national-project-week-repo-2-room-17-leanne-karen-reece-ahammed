import express from 'express';
import { getAllUserData, createData } from '../models/data.js';
var router = express.Router();


/* GET home page. */
router.get('/user', async function(req, res, next) {
  const data =  await getAllUserData();
  res.json({success : true, payload : data})
});


export default router;
