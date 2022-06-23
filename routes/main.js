'use strict';

import express from 'express';
import controllers from '../controllers/main.js';


const router = express.Router();


router.get('/users', controllers.getUsers);
router.post('/users',controllers.addUser);
router.delete('users/:id', controllers.deleteUser);
router.put('users/:id', controllers.changeUser);


export default router;
