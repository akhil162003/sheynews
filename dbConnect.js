const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://akhilkannedari169:4r1HPaDcT9bhnmCl@cluster0.s7gkyzm.mongodb.net/users'  , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connection.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})


module.exports = mongoose