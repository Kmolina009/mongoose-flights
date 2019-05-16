const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightsSchema = new Schema({
    Airline: {
    type: String,
    enum:['American','SouthWest','United'],
    required: true
    },
    flightNo:{
        type: Number,
        min:10,
        max:9999,
        required:true
    },
    departs:{
        type: Date,default () => {
            return new Date().getFullYear();
        }
    }

});