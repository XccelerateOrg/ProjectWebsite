const express = require("express");

class ProjectRouter {
  constructor(projectService) {
    this.projectService = projectService;
  }
  router() {
    let router = express.Router();
    router.get("/api/projects", this.getAll.bind(this));
    router.get("/api/projects/:id", this.getOne.bind(this));
    router.post("/api/projects", this.post.bind(this));
    router.put("/api/projects/:id", this.put.bind(this));
    router.delete(
      "/api/projects/:id",
      this.delete.bind(this)
    );
    return router;
  }
  getAll(request, response) {
    return this.projectService
      .getAll()
      .then((projectsList) => {
        response.send(projectsList);
      });
  }
  getOne(request, response) {
    let id = request.params.id;
    return this.projectService
      .getOne(id)
      .then((projectsObject) => {
        response.send(projectsObject);
      });
  }
  post(request, response) {
    let body = request.body;
    console.log("body in router", body);
    return this.projectService.post(body).then((id) => {
      response.send(id);
    });
  }
  put(request, response) {
    let id = request.params.id;
    let body = request.body;
    return this.projectService
      .put(id, body)
      .then((edited) => {
        response.send(edited);
      });
  }
  delete(request, response) {
    let id = request.params.id;
    return this.projectService
      .delete(id)
      .then((deleted) => {
        response.send(deleted);
      });
  }
}
module.exports = ProjectRouter;
