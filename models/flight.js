import mongoose from "mongoose";

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  aiport: {
    type: String,
    enum: ['AUS', 'DFQ', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    required: true,
  },
  departs: {
    type: Date,
    default: function () {
      return new Date().getFullYear()
    },
  }
})

const Flight = mongoose.model('Flight', flightSchema)


export {
  Flight
}