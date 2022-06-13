const mongoose = require("mongoose");

const trainingExecutiveSchema = new mongoose.Schema(
  {
    technology: {
      type: String,
      required: true,
    },
    requirement: {
      type: String,
      required: true,
    },
    labsandbox: {
      type: String,
    },
    platform: {
      type: Boolean,
    },
    reports: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    assessment: {
      mcq: {
        type: Boolean,
      },
      coding: {
        type: Boolean,
      },
      project: {
        type: Boolean,
      },
      casestudy: {
        type: Boolean,
      },
      proctor: {
        type: Boolean,
      },
    },
    courseware: {
      manual: {
        type: Boolean,
      },
      labguide: {
        type: Boolean,
      },
    },
    copax: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrainExec", trainingExecutiveSchema);
