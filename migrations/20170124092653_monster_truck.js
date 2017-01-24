exports.up = function(knex, Promise) {
  return knex.schema.createTable('monster_truck',function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('size');
    table.string('color');
    table.integer('user_id').references("user.id").unsigned().onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable;
};
