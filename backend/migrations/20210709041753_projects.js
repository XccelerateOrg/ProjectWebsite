exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments();
    table.string("title");
    table.string("description");
    table.string("url");
    table.string("image");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
