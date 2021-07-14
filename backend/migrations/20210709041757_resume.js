exports.up = function (knex) {
  return knex.schema.createTable("resume", (table) => {
    table.increments();
    table.string("title");
    table.string("description");
    //   Education, Work, Certification
    table.string("type");
    table.string("image");

    table.string("dates");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("resume");
};
