var Flight = require('../model/flight');
var Ticket = require('../model/ticket');
var moment = require('moment');
module.exports = {
            index,
    new: newFlight,
            create,
            show
};

function index(req, res){
    //Query Database to  gather all resources
    //..because this is an index
    //Once done= we render a view and pass the data 
    Flight.find({}, function(err, flights){
        if(err) return console.log(err)
        console.log(flights)
        res.render('flights/index',{flights, moment})
    }).sort('departs');
}
function newFlight(req, res){
//render a new view
res.render('flights/new')
}
function create (req, res){
    Flight.create(req.body, function(){
        res.redirect('/flights')
    })
}
function show (req, res){
    //we need to query the db for a flights id
        Flight.findById(req.params.id, function(err, flight){
            Ticket.find({flight:flight._id}, function(err, ticket){
                Ticket.findById(req.param.id).populate('flight')
                }.exec.res.render('flights/show',{ flight })
                )
        });
}