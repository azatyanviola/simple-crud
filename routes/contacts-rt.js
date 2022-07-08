'use strict';

import express from 'express';
import contactControllers from '../controllers/contacts-ctr.js';

const contactRouter = express.Router();

contactRouter.get('/contacts', contactControllers.getContacts);
contactRouter.post('/contacts', contactControllers.addContact);


export default contactRouter;