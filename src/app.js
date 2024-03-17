const fs = require('fs');
const express = require('express');
const app = express();

// Importing productNames from names.json file
const productNames = JSON.parse(
    fs.readFileSync(`${__dirname}/data/names.json`)
);

//Middlewares
app.use(express.json());

//Routes
app.get('/api/v1/names/:id',(req,res)=>{
    const {id} = req.params;
    const product = productNames.find(product => product.id == id);
    if(!product){
       return res.status(404).send({"status": "failed", "message": "Not found!"});
    }
     return res.status(200)
    .send({"status": "success","message": "Product name fetched successfully", "data" : {"id": id, "name": product }});
})

// GET endpoint for sending the products to client by id
//Endpoint - /api/v1/names/:id


module.exports = app;