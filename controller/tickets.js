const Flight = require('/model/flight')
const Ticket = require('/model/ticket')

module.exports = {
    new:newTicket,
    create
};

function newTicket(req, res){
    Fligth.findbyId(req.param.id, function(err, flight){
        res.render('ticket/new', { fligth });
    });
}

function create(req, res){
    res.param.flight = req.params.id
    Ticket.create(req.body, function(err, ticket){//fix this line
        res.redirect(`/flights/${req.params.id}`)
    })
}