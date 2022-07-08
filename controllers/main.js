'use strict';


import Contact from '../schema/contacts.js';
import User from '../schema/user.js';
import Conn  from '../schema/connection.js'



async function getUsers(req, res){
  const users = await User.find();

    return res
    .send({
      data:users,
    });
  } 


  async function getOne(req, res){
    const {_id} = req.params;
    const users = await User.find({_id}).populate('contacts') ;
  
      return res
      .send({
        data: users[0],
      });
    } 

  async function addUser(req, res){
    const {firstname, lastname, city, contact} = req.body;

    const session = await Conn.startSession();
    await session.withTransaction(async () => {

    const savedContact = await Contact.create({title: contact.title}, {session});

    const data = await User.create({firstname, lastname, city, contacts:savedContact}, {session});

      return res
            .status(201)
            .send({
               name: data
      });
    });
    session.endSession();
  }

 async function deleteUser(req, res){ 

    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      res
      .status(404)
      .send('No item found');
    }
    res.status(200).send();
  } 


async function changeUser(req, res){
  const userBody = req.body;

    await User.findByIdAndUpdate(req.params.id, req.body);
    await User.save();
    res.send(userBody);
  }


  export default {getUsers, getOne, deleteUser, addUser, changeUser };