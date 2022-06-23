'use strict';


import mongoose from 'mongoose';
import User from '../schema/user.js';


async function getUsers(req, res){
  const users = await User.find();

    return res
    .send({
      data:users,
    });
  } 

  async function addUser(req, res){
    const userBody = req.body;

      const data = await User.create(userBody);
      return res
            .status(201)
            .send({
               name: data
      });
    
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


  export default {getUsers, deleteUser, addUser, changeUser };