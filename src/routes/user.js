const express = require('express')
const userSchema = require('../models/user')
const router = express.Router()

// Listar los usuarios existentes en la BD
router.get('/users',(req,res)=>{
    userSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})
// Consultar un recurso específico existente en la BD
router.get('/users/:id',(req,res)=>{
    const {id} = req.params
    userSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})
    