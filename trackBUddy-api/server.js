const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose') //connection config
const uri = process.env.ATLAS_URI

mongoose.connect(uri,{useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB is Connected")
})

const app = express();
const port= process.env.PORT || 5000

app.use(cors())  //middleware
app.use(express.json());
 
app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
})


