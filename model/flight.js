const mongoose = require('mongoose');
const Schema = mongoose.Schema;



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
        default: function(){
            let date = new Date().setFullYear(new Date().getFullYear() + 1);
            return date;
        }
    },
    tickets:[{
        type:Schema.Types.ObjectId, ref:'tickets'
    }]

});

module.exports = mongoose.model('Flight', flightSchema)