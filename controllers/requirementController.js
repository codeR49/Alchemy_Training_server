const Requirement = require("../models/requirement");
const TrainerSelector = require("../models/trainerselector");
const transporter = require("../helpers/transporter");

const showAllRequirement = (req, res, next) => {
  Requirement.find({})
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

const showOneByFullname = (req, res, next) => {
  Requirement.findOne({ fullname: "Albert Show" })
    .then(
      (one) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(one);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};
const createRequirement = (req, res, next) => {
  Requirement.create(req.body)
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

const updateRequirement = (req, res, next) => {
  Requirement.findByIdAndUpdate(req.params.id, { $set: req.body, new: true })
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

const getAllProposal = (req, res) => {
  TrainerSelector.find({})
    .populate("trainerdetails")
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

const createProposal = (req, res, next) => {
  const { emailToken } = req.body;
  const { Isverified } = req.body;
  console.log(Isverified);
  const requiredProposal = delete req.body.emailToken;
  const removedIsverified = delete req.body.Isverified;
  let tosendmail = req.body.sentmail.to;

  TrainerSelector.create(req.body)
    .then(
      (resItem) => {
        console.log("Training proposal created", resItem);
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.json(resItem);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));

  async function verifiedMain(mailto) {
    let info = await transporter.sendMail({
      from: '"Arnab 👻" <lalit.k@aol.com>', // sender address
      to: mailto, // list of receivers
      // cc: "rishiproto@gmail.com",
      // bcc: "arnabphukon.93@outlook.com",
      subject: req.body.sentmail.subject, //"Checking bcc and cc ✔", // Subject line
      text: req.body.sentmail.mailbody, //"Hello world?", // plain text body
      html: `<b>${req.body.sentmail.mailbody}</b>`
    });
    console.log("Message sent: %s", info.messageId);
  }

  async function isVerifiedMain(mailto, token) {
    let info = await transporter.sendMail({
      from: '"Arnab 👻" <lalit.k@aol.com>', // sender address
      to: mailto, // list of receivers
      // cc: "rishiproto@gmail.com",
      // bcc: "arnabphukon.93@outlook.com",
      subject: req.body.sentmail.subject, //"Checking bcc and cc ✔", // Subject line
      text: req.body.sentmail.mailbody, //"Hello world?", // plain text body
      html: `<b>${req.body.sentmail.mailbody}</b>
      <h4>Please verify your email to continue...</h4>
      <a href="http://${req.headers.host}/trainer/verify-email?token=${token}&Isverified=true">Accept</a> 
      <br/>
      <a href="http://${req.headers.host}/trainer/verify-email?token=${token}&Isverified=false">Reject</a>       
      `,
    });
    console.log("Message sent: %s", info.messageId);
  }

  for (let i = 0; i < tosendmail.length; i++) {
    if(Isverified[i] === 'true'){
      verifiedMain(tosendmail[i]).catch(console.error);
    }
    else{
      isVerifiedMain(tosendmail[i], emailToken[i]).catch(console.error);
    }
  }
};

module.exports = {
  showAllRequirement,
  createRequirement,
  showOneByFullname,
  updateRequirement,
  createProposal,
  getAllProposal,
};
