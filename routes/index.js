//server
const express = require('express');
const router = express.Router();

//database
const mongoose = require('mongoose');
//connect to database
const dbuser = "coin";
const dbpassword = "coin";
const mLabUrlEnd = '@ds261247.mlab.com:61247/crashcoin';
mongoose.connect('mongodb://' + dbuser + ':' + dbpassword + mLabUrlEnd);

//bring in Schema
var user = require('../lib/user');

router.get('/incrementPoint/:point', function(req, res, next) {
  const points = req.params.point;
  //cache profile information
  
  //create in instance of the user schema
  let userProfile = new user();
  //set profile information
  userProfile.username = point;
  //save profile information
  userProfile.save((err, userObj) => {
    //send status
    if(err){
      console.log(err);
      return res.status(500).send();
    } else {
      return res.status(200).send();
    }
  });
});

// //update the user information
// router.put('/update', (req, res, next) => {
//   const name = req.query.username;
//   const password = req.query.password;
//   const id = req.query.id;
//
//   userProfile.findOne({_id: id}, (err, obj) => {
//     //update the information if the information is given in the url
//     if(name){
//       if(err){
//         console.log(err);
//         res.status(500).send();
//       } else {
//         obj.username = name;
//         obj.save((err, object) => {
//           if(err){
//             console.log(err);
//             res.status(500).send();
//           } else {
//             res.send(object);
//           }
//         });
//       }
//     }
//
//     if(password){
//       if(err){
//         console.log(err);
//         res.status(500).send();
//       } else {
//         obj.password = password;
//         obj.save((err, object) => {
//           if(err){
//             console.log(err);
//             res.status(500).send();
//           } else {
//             res.send(object);
//           }
//         });
//       }
//     }
//
//   }); // end: userProfile.findOne
//
// });

module.exports = router;
