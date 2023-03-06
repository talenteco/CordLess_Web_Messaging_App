
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const port = 4000;
const app = express();
const connectDatabase = require("./config/connectToDB.js");
app.use(cors());
app.use(express.json());
const getUserMessageRouter = require('./routes/getUserMessageRouter');

app.use('/messages', getUserMessageRouter);

connectDatabase()

app.get('/',(req, res)=>{
  res.send("Hello World")})

app.listen(port, ()=>console.log(`app is listening on ${port}`))
