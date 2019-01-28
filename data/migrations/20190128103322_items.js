exports.up = function(knex, Promise) {
  return knex.schema.createTable("items", items => {
    items.increments();

    items
      .string("name", 128)
      .notNullable()
      .unique();

    items.string("type", 128).notNullable();

    items.integer("durability").notNullable();

    items.integer("level").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("items");
};
