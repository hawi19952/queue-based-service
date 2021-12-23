const dotenv = require('dotenv').config(); 
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient;
const URI =  process.env.MONGO_URI || "mongodb://localhost:27017/mydb"; 

