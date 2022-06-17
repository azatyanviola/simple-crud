'use strict';

import express from 'express';
import controllers from '../controllers/main.js';

const router = express.Router();


router.get('/', controllers.getUsers);
router.get('/:id', controllers.getOneUser);
router.post('/',controllers.addUser);
router.delete('/:id', controllers.deleteUser);
router.put('/:id', controllers.changeUser);


export default router;
