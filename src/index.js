const express = require('express')
const mongoose = require('mongoose')

const port = process.env.PORT || 3000
const execute_app = express()
require('dotenv').config()

execute_app.listen(port,()=>console.log('server listening on port',port))

execute_app.get('/',(req,res)=>res.send('Ingenieria de Software 2'))

mongoose
    .connect(process.env.CONNECTION_STRING_MONGODB)
    .then(()=>console.log('Connect with mongodb'))
    .catch((error)=>console.error(error))