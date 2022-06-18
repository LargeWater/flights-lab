import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight",
  })
}

function create(req, res) {

}

function index(req, res) {

}

function show(req, res) {

}

function edit(req, res) {

}





export {
  newFlight as new,
  create,
  index,
  show,
  edit
}