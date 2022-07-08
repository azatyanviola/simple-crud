'use strict';


import mongoose from 'mongoose';
import Contact from '../schema/contacts.js';


async function getContacts(req, res){
    const contacts = await Contact.find();
  
      return res
      .send({
        data:contacts,
      });
    } 


    async function addContact(req, res){
        const userBody = req.body;
    
          const data = await Contact.create(userBody);
          return res
                .status(201)
                .send({
                   name: data
          });
        
      }

      export default {getContacts, addContact};
  