exports.up = function (knex) {
  return knex.schema.createTable("thoughts", (table) => {
    table.increments();
    table.string("title");
    table.string("post");
    //   Education, Work, Certification
    table.string("category");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("thoughts");
};
