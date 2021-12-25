const dotenv = require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes');

//TODO: 1) create a universal string for connection based on user input for env

const uri = process.env.MONGO_URI || 'mongodb://myUserAdmin:password@localhost:27017/dummy_service?authSource=admin&readPreference=primary&appname=mongodb-vscode%200.7.0&ssl=false'; 
const queueName = process.env.QUEUE_NAME || 'test'; 
const port = process.env.PORT || '4100'; 

const app = express(); 

app.use(express.json())

mongoose.connect(uri, 
    {
        useNameUrlParser: true, 
        useFindAndModify: false, 
        useUnifiedTopology: true
    }
);

const db = mongoose.connection; 
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Connected Successfully! ");
})

app.use(Router); 

app.listen(port, () => {
    console.log(`Server is connected to port ${port}`);
});

