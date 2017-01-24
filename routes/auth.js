var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcryptjs')


/* GET users listing. */
router.post('/signup', function(req, res, next) {
  if (!req.body.email || !req.body.password || !req.body.f_name) {
    res.status(500).json({"error":"enter an email and password n shit"})
  } else {
    console.log(req.body);
    return knex('user')
    .where('user.email',req.body.email)
    .then((data)=>{
      console.log(data.length);
      if (data.length === 0 ) {
        return knex('user').insert({email: req.body.email, password:bcrypt.hashSync('test', 8), f_name:req.body.f_name})
        .then((data)=>{
          res.status(200).json({"Congrats":"Welcome to the experience"});
        });
      } else {
        res.status(500).json({"error":"stop trying to sign up you already have an email in our db"})
      }
    });
  }


});

router.post('/login', function(req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.status(500).json({"error":"enter an email and password n shit"})
  } else {
    return knex('user')
    .where('user.email',req.body.email)
    .then((user)=>{
      if (user.length === 0) {
        return res.status(500).json({"error":"email not found"})
      } else {
        bcrypt.compare(req.body.password, user[0].password, function(err, resp) {
          if (resp) {
            return res.status(200).json(user);
          } else {
            return res.status(500).json({"error":"wrong password yo"});
          }
        });
      }
    })
  }
});

module.exports = router;
