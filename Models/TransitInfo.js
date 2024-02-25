const mongoose = require("mongoose");
const { Schema } = mongoose;

const TransitInfo = new Schema({
  operator: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  departure: {
    type: Date,
    required: true,
  },
  arrival: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  OperatingDays: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("TransitInfo", TransitInfo);
