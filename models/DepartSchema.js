const mongoose = require("mongoose");

const { Schema } = mongoose;
const departmentSchema = new Schema({
  namedep: {
    type: String,
    required: true,
  },
  functiondep: {
    type: String,
    required: true,
  },
  ressources: {
    type: {},
    required: true,
  },
  staff: {
    type: [String],
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Department", departmentSchema);
