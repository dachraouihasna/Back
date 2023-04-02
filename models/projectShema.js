const mongoose = require("mongoose");

const { Schema } = mongoose;
const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  clientname: {
    type: String,
    required: true,
  },
  specification: {
    type: String,
    required: true,
  },
  idleader: {
    type: String,
    required: true,
  },
  receivedate: {
    type: Date,
    required: true,
  },
  deliverydate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
