var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const queries = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getAllTrucks()
  .then((trucks)=>{
    res.json(trucks);
  });
});

router.post('/', function(req,res,next){
  queries.postOneTruck(req.body)
  .then((truck)=>{
    res.json(truck);
  });
});

router.get('/:id', function(req,res,next){
  queries.showOneTruck(req.params.id)
  .then((truck)=>{
    res.json(truck);
  });
});

router.put('/:id', function(req,res,next){
  queries.updateOneTruck(req.body, req.params.id)
  .then((truck)=>{
    res.json(truck);
  });
});

router.delete('/:id', function(req,res,next){
  queries.deleteOneTruck(req.params.id)
  .then((truck)=>{
    res.json(`Deleted monster truck with id ${truck}`);
  });
});

module.exports = router;
