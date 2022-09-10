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
    registered:true,
    name: user.name,
    number: user.number,
    accountCreationDate: user.accountCreationDate,
    givenRespects: [],
    recievedRespects: []

  });
  newUser.save();
  res.send("user created");
})

router.route('/getUsers').get((req, res) => {
  User.find().then((foundData) => res.send(foundData))
})
router.route('/getUsers/:number').get((req, res) => {
  const phone = req.params.number;
  User.find({ number: phone }).then((foundData) => res.send(foundData))

})

router.route("/updateGivenRespects").post( (req, res) => {
  
   User.findOneAndUpdate(
    { number: req.body.number },
    {$push:{ givenRespects: req.body.respects }},
  ).then(()=>User.findOne({ number: req.body.number }).then((foundData) =>
      res.send(foundData)
))
});

router.route("/updateRecievedRespects").post( (req, res) => {
  
  User.findOneAndUpdate(
   { number: req.body.number },
   {$push:{ recievedRespects: req.body.respects }},
 ).then(()=>User.findOne({ number: req.body.number }).then((foundData) =>
     res.send(foundData)
))
});

module.exports = router;