import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight",
  })
}

function create(req, res) {
  console.log(req.body)
  Flight.create(req.body)
  .then(flight => {
    console.log(flight)
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      title: 'All flights',
      flights: flights
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function show(req, res) {

}

function edit(req, res) {

}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect('/flights')
  })
  
}



export {
  newFlight as new,
  create,
  index,
  show,
  edit,
  deleteFlight as delete
}