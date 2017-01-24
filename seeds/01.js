const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "monster_truck"; ALTER SEQUENCE monster_truck_id_seq RESTART WITH 6')
  .then(()=>{
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
  })
  .then(()=>{
    return Promise.all([
      knex("user").insert([{
        id:1,
        'f_name':'Dillon',
        'email':'dcorkran972@gmail.com',
        'password':bcrypt.hashSync('test', 8)
      },{
        id:2,
        'f_name':'Steve',
        'email':'Steve@gmail.com',
        'password':bcrypt.hashSync('test', 8)
      }])
    ])
  })
};
