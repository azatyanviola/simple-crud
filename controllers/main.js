'use strict';

//import { v4 as uuidv4 } from "uuid";


let users = [
    {
        firstName: 'Jane',
        lastName:'Jackson',
        city:'Washington'
    },
    {
        firstName: 'Eva',
        lastName:'Sargsyan',
        city:'Yerevan' 
    },
    {
        firstName: 'John',
        lastName:'Green',
        city:'New York'
    }
];

const getUsers = (req, res) => {
    res.send(users);
  };



const getOneUser = (req, res) => {
    const id = req.params.id;
  
    const foundUser = users.find((user) => user.id === id);
  
    res.send(foundUser);
  }

const addUser =  (req, res) => {
    const user = req.body;
  
    const Id = uuidv4();
    const UserId = { ...user, id: Id };
  
    users.push(UserId);
    res.send(`User with the name ${user.firstName} added!`);
  }

const deleteUser = (req, res) => {
    const id = req.params.id;
  
    users = users.filter((user) => user.id != id);
  
    res.send(`User with the id ${id} deleted.`);
  }


const changeUser =  (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, city } = req.body;
  
    const user = users.find((user) => user.id === id);
  
    if (firstName){
         user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (city) {
        user.city = city;
    }
  
    res.send(`User with the id ${id} has been changed!`);
  }


  export default {getUsers, getOneUser, deleteUser, addUser, changeUser };