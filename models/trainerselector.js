const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema(
  {
    trainername: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrainerSelector", mentorSchema);
