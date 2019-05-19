const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat:{
        type:String,
        match: /[A-F][1-9]\d?/
    },
    price:{
        type:Number,
        min:0
    },
    flight:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Flight'
    }
});
const destinationSchema = new Schema({
    airport:{
        type:String,
        enum:['AUS','DAL','LAX','SEA']
    },
    arrival:Date
    
});
const flightSchema = new Schema({
    airport:{
        type:String,
        enum:['AUS','DAL','LAX','SEA'],
        default:'SEA',
        destinations:[destinationSchema]
    },
    airline: {
    type: String,
    enum:['American','Southwest','United']
    },
    flightNo:{
        type: Number,
        max:9999,
        min:10
    },
    departs:{
        type: Date,
        default: function () {
            return new Date().getFullYear() + 1;
        }, 
        arrival:{
            type:Date
        }
    },
    ticket:[{
        type:Schema.Types.ObjectId, ref:'tickets'
    }]

    
});

module.exports= mongoose.model('Ticket', ticketSchema)
module.exports = mongoose.model('Flight', flightSchema)