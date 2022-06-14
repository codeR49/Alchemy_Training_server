const express = require("express");
const trainingController = require("../controllers/requirementController");
const auth = require("../middleware/check-auth");

const trainingRouter = express.Router();
trainingRouter.use(express.json());

trainingRouter
  .route("/")
  .get(auth.checkAuth, trainingController.showAllTraining)
  .post(auth.checkAuth, trainingController.createTraining);

module.exports = trainingRouter;
