const mongoose = require('mongoose')

const connectToDB = ()=>{
mongoose.connect('mongodb://127.0.0.1:27017/admin');

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");

})}

module.exports = connectToDB;