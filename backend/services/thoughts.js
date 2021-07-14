class ThoughtService {
  constructor(knex) {
    this.knex = knex;
  }
  getAll() {
    return this.knex("thoughts")
      .select("*")
      .then((thoughtList) => {
        return thoughtList;
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
  getOne(id) {
    return this.knex("thoughts")
      .select("*")
      .where({ id: id })
      .then((thoughtObject) => {
        return thoughtObject;
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
  post(thoughtObject) {
    return this.knex
      .insert(thoughtObject)
      .into("thoughts")
      .returning("id")
      .catch((error) => {
        throw new Error(error);
      });
  }
  put(id, newthoughtObject) {
    return this.knex("thoughts")
      .update(newthoughtObject)
      .where({ id: id })
      .then(() => {
        console.log("edited thought object");
        return "edited";
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  

  delete(id) {
    return this.knex("thoughts")
      .select("*")
      .where({ id: id })
      .del()
      .then(() => {
        return "deleted";
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
module.exports = ThoughtService;
