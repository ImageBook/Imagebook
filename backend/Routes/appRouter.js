const express = require("express");
const router = express.Router();
const User = require("../Schemas/UserSchema");

router.route('/postUsers').post(async (req, res) => {

  const foundData = await User.find({ number: req.body.number })
  if (foundData.length === 0) {
    const user = {
      name: req.body.name,
      number: req.body.number,
      accountCreationDate: Date.now()
    };
    const newUser = new User({
      registered: true,
      name: user.name,
      number: user.number,
      accountCreationDate: user.accountCreationDate,
      givenRespects: [],
      recievedRespects: []

    });
    await newUser.save();
    console.log("user created");
  }
  else if (foundData.length !== 0 && foundData[0]?.registered == false) {
    await User.findOneAndUpdate({ number: req.body.number }, { registered: true, name: req.body.name, accountCreationDate: Date.now() })
  }
})




router.route('/getUsers').get((req, res) => {
  User.find().then((foundData) => res.send(foundData))
})
router.route('/getUsers/:number').get((req, res) => {
  const phone = req.params.number;

  User.find({ number: phone }).then((foundData) => res.send(foundData))

})

router.route("/updateGivenRespects").post((req, res) => {


  User.findOneAndUpdate(
    { number: req.body.number },
    { $push: { givenRespects: req.body.respects } },
  ).then(() => User.findOne({ number: req.body.number }).then((foundData) =>
    res.send(foundData)
  ))
})




router.route("/updateRecievedRespects").post((req, res) => {

  User.find({ number: req.body.number }).then((foundData) => {
    if (foundData?.length == 0) {
      const user = new User({
        registered: false,
        name: req.body.name,
        number: req.body.number,
        accountCreationDate: Date.now(),
        recievedRespects: [req.body.respects],
        givenRespects: [],
      })
      user.save().then(() => console.log('user created'));

    }
    else {
      User.findOneAndUpdate(
        { number: req.body.number },
        { $push: { recievedRespects: req.body.respects } },
      ).then(() => console.log("done")
      )
      return;
    }
  })


});

router.route('/createNonExistingUser').post(async (req, res) => {

  const user = new User({
    registered: false,
    name: req.body.name,
    number: req.body.number,
    givenRespects: [],
    recievedRespects: []
  })

  await user.save().then(() => res.send(user));

})


module.exports = router;