exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resume")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resume").insert([
        {
          id: 1,
          title: "Masters in Computer Science",
          description: "rowValue1",
          type: "Education",
          image: "",
          dates: "2020 - 2022",
        },
      ]);
    });
};
