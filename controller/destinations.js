var Fligth = require('../model//flight')

module.exports={
    create
}

function create(req, res){
    //first step query database for a destination
    flight.findById(req.params.id, function(err, flight){
        //once we get back the flight we queried we need to ass a destination
        flight.destinations.push(req.body);
        flight.save(function(err){
            console.log(flight)
            res.redirect(`/flight/${flight._id}`)
        })//commit's it to database
    })
};