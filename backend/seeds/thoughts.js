exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("thoughts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("thoughts").insert([
        {
          id: 1,
          title: "thought one",
          post: "post one",
          category: "books",
        },
        {
          id: 1,
          title: "thought one",
          post: "post one",
          category: "blogs",
        },
      ]);
    });
};
