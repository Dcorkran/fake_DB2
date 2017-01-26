const knex = require('./knex');

module.exports = {
  getAllTrucks: function(){
    return knex('monster_truck');
  },
  postOneTruck: function(body) {
    return knex('monster_truck')
    .returning(['id','name','size','color'])
    .insert({
      name:body.name,
      size:body.size,
      color:body.color,
      user_id:1
    });
  },
  showOneTruck: function(id){
    return knex('monster_truck')
    .where('id',id);
  },
  updateOneTruck: function(body,id){
    return knex('monster_truck')
    .returning(['id','name','size','color'])
    .where('id',id)
    .update({
      name:body.name,
      size:body.size,
      color:body.color,
    });
  },
  deleteOneTruck: function(id){
    return knex('monster_truck')
    .returning('id')
    .where('id',id)
    .del();
  }
};
