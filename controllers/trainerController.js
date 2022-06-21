const Trainer = require("../models/trainer");
const crypto = require("crypto");

const showAllTrainers = (req, res, next) => {
  Trainer.find({})
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

const createTrainer = (req, res, next) => {
  const emailToken = crypto.randomBytes(64).toString("hex");
  Trainer.create({ ...req.body, emailToken })
    .then(
      (resItem) => {
        console.log("Trainer created", resItem);
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.json(resItem);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

const updateTrainer = (req, res, next) => {
  Trainer.findByIdAndUpdate(req.params.id, { $set: req.body, new: true })
    .then(
      (update) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(update);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

const verifyemail = (req, res) => {
  const emailToken=req.query.token;
  const { Isverified } = req.query;
  console.log(typeof(Isverified));
  Trainer.findOne({ emailToken: emailToken })
        .then(trainer => {
            if (trainer === null) {
                res.status(401).json({
                    message: "Invalid Token or Token expired",
                });
            }

            else if(Isverified === 'true'){
                trainer.emailToken = ''
                trainer.Isverified=true
                trainer.save()
                res.status(200).json({
                  message: "Email Successfully Verified"
              });
              } else {
                trainer.Isverified=false
                trainer.save()
                res.status(200).json({
                  message: "Your email verification is rejected as per your choice",
              })
              
            }
          })
};

module.exports = {
  showAllTrainers,
  createTrainer,
  updateTrainer,
  verifyemail,
};
