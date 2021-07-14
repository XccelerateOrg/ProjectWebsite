class ResumeService {
  constructor(knex) {
    this.knex = knex;
  }
  getAll() {
    return this.knex("resume")
      .select("*")
      .then((resumeList) => {
        return resumeList;
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
  getOne(id) {
    return this.knex("resume")
      .select("*")
      .where({ id: id })
      .then((resumeObject) => {
        return resumeObject;
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
  post(resumeObject) {
    return this.knex
      .insert(resumeObject)
      .into("resume")
      .returning("id")
      .catch((error) => {
        throw new Error(error);
      });
  }
  put(id, newResumeObject) {
    return this.knex("resume")
      .update(newResumeObject)
      .where({ id: id })
      .then(() => {
        console.log("edited resume object");
        return "edited";
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  delete(id) {
    return this.knex("resume")
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
module.exports = ResumeService;
