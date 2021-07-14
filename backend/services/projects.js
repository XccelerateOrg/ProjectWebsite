class ProjectService {
  constructor(knex) {
    this.knex = knex;
  }
  getAll() {
    return this.knex("projects")
      .select("*")
      .then((projectsList) => {
        return projectsList;
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
  getOne(id) {
    return this.knex("projects")
      .select("*")
      .where({ id: id })
      .then((projectsObject) => {
        return projectsObject;
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
  post(projectObject) {
    return this.knex
      .insert(projectObject)
      .into("projects")
      .returning("id")
      .catch((error) => {
        throw new Error(error);
      });
  }
  put(id, newprojectsObject) {
    return this.knex("projects")
      .update(newprojectsObject)
      .where({ id: id })
      .then(() => {
        console.log("edited projects object");
        return "edited";
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  delete(id) {
    return this.knex("projects")
      .select("*")
      .where({ id: id })
      .del()
      .then(() => {
        console.log("deleted all users bugs");
        return "deleted";
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
module.exports = ProjectService;
