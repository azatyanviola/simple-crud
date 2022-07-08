'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import router from './routes/main.js';
import contactRouter from './routes/contacts-rt.js';

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use('/', router);
app.use('/', contactRouter);


( async () =>{
   await mongoose.connect('mongodb://localhost:27017/crud');
  })();






app.listen(PORT, () => console.log('Server is running'));