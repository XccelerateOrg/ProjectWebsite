const express = require("express");

class ThoughtRouter {
  constructor(thoughtService) {
    this.thoughtService = thoughtService;
  }
  router() {
    let router = express.Router();
    router.get("/api/thoughts", this.getAll.bind(this));
    router.get("/api/thoughts/:id", this.getOne.bind(this));
    router.post("/api/thoughts", this.post.bind(this));
    router.put("/api/thoughts/:id", this.put.bind(this));
    router.delete(
      "/api/thoughts/:id",
      this.delete.bind(this)
    );
    return router;
  }
  getAll(request, response) {
    return this.thoughtService
      .getAll()
      .then((thoughtList) => {
        response.send(thoughtList);
      });
  }
  getOne(request, response) {
    let id = request.params.id;
    return this.thoughtService
      .getOne(id)
      .then((thoughtObject) => {
        response.send(thoughtObject);
      });
  }
  post(request, response) {
    let body = request.body;
    console.log("body in router", body);
    return this.thoughtService.post(body).then((id) => {
      response.send(id);
    });
  }
  put(request, response) {
    let id = request.params.id;
    let body = request.body;
    return this.thoughtService
      .put(id, body)
      .then((edited) => {
        response.send(edited);
      });
  }
  delete(request, response) {
    let id = request.params.id;
    return this.thoughtService
      .delete(id)
      .then((deleted) => {
        response.send(deleted);
      });
  }
}
module.exports = ThoughtRouter;
