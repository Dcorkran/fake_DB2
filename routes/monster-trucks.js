var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const queries = require('../db/queries')

/**
 * @api {get} /monster-trucks Request List of Monster Trucks
 * @apiName GetMonsterTrucks
 * @apiGroup MonsterTruck
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
   [
     {
       "id": 1,
       "name": "Grave Digger",
       "size": "XXXL",
       "color": "Green",
       "user_id": 1
     },
     {
       "id": 2,
       "name": "Tall Cold One",
       "size": "XL",
       "color": "Blue",
       "user_id": 2
     }
   ]
 */

router.get('/', function(req, res, next) {
  queries.getAllTrucks()
  .then((trucks)=>{
    res.json(trucks);
  });
});

/**
 * @api {post} /monster-trucks Post a Monster Truck
 * @apiName PostMonsterTruck
 * @apiGroup MonsterTruck
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
     [
      {
        "id": 7,
        "name": "Tall Cold Onessssssss",
        "size": "Mini",
        "color": "Brown"
      }
    ]
 */

router.post('/', function(req,res,next){
  queries.postOneTruck(req.body)
  .then((truck)=>{
    res.json(truck);
  });
});


/**
 * @api {get} /monster-trucks/:id Get a Monster Truck by their id
 * @apiName GetMonsterTruckById
 * @apiGroup MonsterTruck
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
   [
    {
      "id": 1,
      "name": "Grave Digger",
      "size": "XXXL",
      "color": "Green",
      "user_id": 1
      }
    ]
 */

router.get('/:id', function(req,res,next){
  queries.showOneTruck(req.params.id)
  .then((truck)=>{
    res.json(truck);
  });
});

/**
 * @api {put} /monster-trucks/:id Update a Monster Truck by their id
 * @apiName PutMonsterTruckById
 * @apiGroup MonsterTruck
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 [
  {
    "id": 6,
    "name": "Tall Cold Onesssssssss",
    "size": "Mini",
    "color": "Brown"
  }
]
 */

router.put('/:id', function(req,res,next){
  queries.updateOneTruck(req.body, req.params.id)
  .then((truck)=>{
    res.json(truck);
  });
});

/**
 * @api {put} /monster-trucks/:id Update a Monster Truck by their id
 * @apiName PutMonsterTruckById
 * @apiGroup MonsterTruck
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
    "Deleted monster truck with id 6"
 */

router.delete('/:id', function(req,res,next){
  queries.deleteOneTruck(req.params.id)
  .then((truck)=>{
    res.json(`Deleted monster truck with id ${truck}`);
  });
});

module.exports = router;
