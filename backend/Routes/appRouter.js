const express = require("express");
const router = express.Router();
const User = require("../Schemas/UserSchema");

router.route('/postUsers').post((req, res) => {
  const user = {
    name: req.body.name,
    number: req.body.number,
    accountCreationDate: Date.now()
  };
  const newUser = new User({
    name: user.name,
    number: user.number,
    accountCreationDate: user.accountCreationDate,
    respects: [],

  });
  newUser.save();
  res.send("user created");
})

router.route('/getUsers').get((req, res) => {
  User.find().then((foundData) => res.send(foundData))
})
router.route('/getUsers/:number').get((req, res) => {
  const phone = req.params.number;
  User.findOne({ number: phone }).then((foundData) => res.send(foundData)).catch((noData) => res.send({ user: "No User Found!" }))
})

module.exports = router;