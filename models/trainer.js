const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    yop: {
      type: String,
      required: true,
    },
    technologyoverview: {
      type: Array,
      required: true
    },
    skills: {
      type: Array,
      required: true,
    },
    language: {
      type: Array,
      required: true,
    },
    corporateclient: {
      type: String,
    },
    hourlyrates: {
      type: String,
      required: true,
    },
    emailToken: {
      type: String
    },
    Isverified: {
      type: Boolean
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trainer", trainerSchema);
