const Training = require("../models/training");

const showAllTraining = (req, res, next) => {
  Training.find({})
    .then(
      (all) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(all);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

const createTraining = (req, res, next) => {
  Training.create(req.body)
    .then(
      (resItem) => {
        console.log("Training created", resItem);
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.json(resItem);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};
module.exports = {
  showAllTraining,
  createTraining,
};
