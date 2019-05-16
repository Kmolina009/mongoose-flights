var mongoose = require('mongoose');

mongoose.connect('mongoose://localhost/flight',
    {useNewParser:true}
);

var dataDB = mongoose.connection;

dataDB.on('connection', function(){
    console.log(`Connection to MongoDB at ${db.host}:${db.port}`)
});