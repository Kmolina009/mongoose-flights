var Flights = requre('../model/flights');

module.exports = {
    new: newFlight,
    index
}

function index(res, req){
    Flights.find({}, function(err, flights){
        res.redirect('/flights/new'),{flights}
    })
}
function flight(res,req){
    Flights.find({}))//generate a number between 10 and 9999
}