const express = require("express");

class ResumeRouter {
  constructor(resumeService) {
    this.resumeService = resumeService;
  }
  router() {
    let router = express.Router();
    router.get("/api/resume", this.getAll.bind(this));
    router.get("/api/resume/:id", this.getOne.bind(this));
    router.post("/api/resume", this.post.bind(this));
    router.put("/api/resume/:id", this.put.bind(this));
    router.delete(
      "/api/resume/:id",
      this.delete.bind(this)
    );
    return router;
  }
  getAll(request, response) {
    return this.resumeService
      .getAll()
      .then((resumeList) => {
        response.send(resumeList);
      });
  }
  getOne(request, response) {
    let id = request.params.id;
    return this.resumeService
      .getOne(id)
      .then((resumeObject) => {
        response.send(resumeObject);
      });
  }
  post(request, response) {
    let body = request.body;
    console.log("body in router", body);
    return this.resumeService.post(body).then((id) => {
      response.send(id);
    });
  }
  put(request, response) {
    let id = request.params.id;
    let body = request.body;
    return this.resumeService
      .put(id, body)
      .then((edited) => {
        response.send(edited);
      });
  }
  delete(request, response) {
    let id = request.params.id;
    return this.resumeService.delete(id).then((deleted) => {
      response.send(deleted);
    });
  }
}
module.exports = ResumeRouter;
