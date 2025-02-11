const express=require('express');
const { default: mongoose } = require('mongoose');
const Mongoose=require('mongoose')
require('dotenv').config();

const app=express();
const port = 8000;

const restaurantSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    itemId: {
        type: [String],
        unique: true,
    },
});

const detailsSchema = new Mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
});

module.exports=mongoose.model('Restaurant', restaurantSchema);
module.exports=mongoose.model('Details', detailsSchema);
