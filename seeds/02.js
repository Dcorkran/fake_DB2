const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {

  return knex.raw('DELETE FROM "monster_truck"; ALTER SEQUENCE monster_truck_id_seq RESTART WITH 6')

  .then(()=>{
    return Promise.all([

      knex('monster_truck').insert([{
        id:1,
        'name':'Grave Digger',
        'size':'XXXL',
        'color':'Green',
        'user_id':1,
      },{
        id:2,
        'name':'Tall Cold One',
        'size':'XL',
        'color':'Blue',
        'user_id':2,
      },{
        id:3,
        'name':'Mean Machine',
        'size':'M',
        'color':'Black',
        'user_id':2,
      },{
        id:4,
        'name':'The Tempest',
        'size':'XL',
        'color':'Blue',
        'user_id':1,
      },{
        id:5,
        'name':'Grave Digger 2',
        'size':'XXXXXXXL',
        'color':'Purple',
        'user_id':1,
      }])
    ])
  })
};
