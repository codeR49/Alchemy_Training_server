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
        type: String,
      },
      labsandbox: {
        type: String,
      },
      mentor: {
        type: String,
      },
      labsupport: {
        type: String,
      },
      offlinesupport: {
        type: String,
      },
    },
    addonsdescription: {
      type: String,
      required: true,
    },

    assessment: {
      mcq: {
        type: String,
      },
      coding: {
        type: String,
      },
      project: {
        type: String,
      },
      casestudy: {
        type: String,
      },
      proctor: {
        type: String,
      },
    },
    reports: {
      dailyattendance: {
        type: String,
      },
      weeklyattendance: {
        type: String,
      },
      monthlyattendance: {
        type: String,
      },
      weeklyperformance: {
        type: String,
      },
      monthlyperformance: {
        type: String,
      },
      consolidatedmonthlyreport: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Requirement", trainingExecutiveSchema);
