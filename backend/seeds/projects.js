exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          title: "Canvas",
          description: "canvas project",
          url: "",
          image: "",
        },
        {
          id: 2,
          title: "Web Project",
          description:
            "A project that demonstrates the importance of creating",
          url: "",
          image: "",
        },
        {
          id: 3,
          title: "rowValue1",
          description: "rowValue1",
          url: "",
          image: "",
        },
      ]);
    });
};
