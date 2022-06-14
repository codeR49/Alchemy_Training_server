const mongoose = require("mongoose");

const trainingExecutiveSchema = new mongoose.Schema(
  {
    clientname: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    startdate: {
      type: String,
      required: true,
    },
    copax: {
      type: Number,
      required: true,
    },
    technology: {
      type: String,
      required: true,
    },
    techdescription: {
      type: String,
      required: true,
    },
    addons: {
      platform: {
        type: Boolean,
      },
      labsandbox: {
        type: Boolean,
      },
      mentor: {
        type: Boolean,
      },
      labsupport: {
        type: Boolean,
      },
      offlinesupport: {
        type: Boolean,
      },
    },
    addonsdescription: {
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
    reports: {
      dailyattendance: {
        type: Boolean,
      },
      weeklyattendance: {
        type: Boolean,
      },
      monthlyattendance: {
        type: Boolean,
      },
      weeklyperformance: {
        type: Boolean,
      },
      monthlyperformance: {
        type: Boolean,
      },
      consolidatedmonthlyreport: {
        type: Boolean,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Requirement", trainingExecutiveSchema);
