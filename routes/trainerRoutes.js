const express = require("express");
const trainerController = require("../controllers/trainerController");
const auth = require("../middleware/check-auth");

const trainerRouter = express.Router();
trainerRouter.use(express.json());

trainerRouter
  .route("/")
  .get(auth.checkAuth, trainerController.showAllTrainers)
  .post(auth.checkAuth, trainerController.createTrainer);

trainerRouter.put('/:id', auth.checkAuth, trainerController.updateTrainer);

trainerRouter.get("/verify-email", trainerController.verifyemail);
module.exports = trainerRouter;