require("dotenv").config();
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

function signup(req, res) {
  User.findOne({ email: req.body.email })
    .then((result) => {
      if (result) {
        res.status(409).json({
          message: "Account Already exist with this email",
        });
      } else {
        const orgpass = req.body.password;
        bcryptjs.genSalt(10, function (err, salt) {
          bcryptjs.hash(req.body.password, salt, function (err, hash) {
            const newuser = new User({
              name: req.body.name,
              username: req.body.username,
              email: req.body.email,
              password: hash,
              roles: req.body.roles,
            });

            newuser
              .save()
              .then((result) => {
                res.status(201).json({
                  message:
                    "User Signed Up Successfully Please verify your email",
                  post: result,
                });
              })
              .catch((error) => {});
          });
        });
      }
    })

    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
}

function login(req, res) {
  User.findOne({ username: req.body.username })
    .then((user) => {
      console.log(user._id);

      if (user === null) {
        res.status(401).json({
          message: "Invalid Credentials",
        });
      } else {
        bcryptjs.compare(
          req.body.password,
          user.password,
          function (error, result) {
            if (result) {
              const token = jwt.sign(
                {
                  name: user.name,
                  roles: user.roles,
                },
                process.env.JWT_KEY,
                { expiresIn: "5h" },
                function (err, token) {
                  res.status(200).json({
                    message: "Authentication Successfull",
                    token: token,
                  });
                }
              );
            } else {
              res.status(401).json({
                message: "Invalid Credentials",
              });
            }
          }
        );
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
}

module.exports = {
  signup: signup,
  login: login,
};
