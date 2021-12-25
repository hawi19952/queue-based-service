const mongoose = require('mongoose');
//TODO: 2) create the right default schema for the queue and incorporate the user-generated schema
const QueueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number, 
        default: 0,
    },
});

const Queue = mongoose.model("Queue", QueueSchema); 
module.exports = Queue; 
