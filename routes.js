const express = require('express'); 
const queueModel = require('./models');

const app = express(); 

app.post("/add_queue_item", async (request, response) => {
    const queueItem = new queueModel(request.body); 

    try {
        await queueItem.save(); 
        response.send(queueItem);
    } catch (error) {
        response.status(500).send(error); 
    }
}); 

app.get("/queue_items", async (request, response) => {
    const queueItems = await queueModel.find({}); 

    try {
        response.send(queueItems);
    } catch (error) {
        response.status(500).send(error);
    }
})

module.exports = app; 

//test