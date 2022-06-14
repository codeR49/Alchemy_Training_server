const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema(
  {
    trainername: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trainer", trainerSchema);
