const express = require("express");
const requirementController = require("../controllers/requirementController");
const auth = require("../middleware/check-auth");

const requirementRouter = express.Router();
requirementRouter.use(express.json());

requirementRouter
  .route("/")
  .get(auth.checkAuth, requirementController.showAllRequirement)
  .post(auth.checkAuth, requirementController.createRequirement);

  requirementRouter.get('/reqone', auth.checkAuth, requirementController.showOneByFullname);

  requirementRouter.put('/requpdate/:id', auth.checkAuth, requirementController.updateRequirement);

  requirementRouter.get('/allproposal', auth.checkAuth, requirementController.getAllProposal);

  requirementRouter.post('/proposal', auth.checkAuth, requirementController.createProposal);

module.exports = requirementRouter;
