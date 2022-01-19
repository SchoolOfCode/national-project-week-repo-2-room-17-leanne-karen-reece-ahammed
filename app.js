import express from 'express';
import path from 'path';
import __dirname  from './dirname.js';
import cors  from 'cors';
import logger  from 'morgan';
import usersRouter  from './routes/index.js';
const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for :disappointed:"})
})
app.use(function (err, req, res) {
  console.error(err.stack)
  res.status(500).json(err)
})
export default app;