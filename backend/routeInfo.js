const routeInfo = [
  {
    link: "/api/projects",
    type: "GET",
    get: true,
    template: "/api/projects",
    purpose: "gets all projects",
    // backendtest: "no",
    frontendconnect: "ProjectPage",
    notes: "id, title, description, url, image, timestamp",
  },
  {
    link: "/api/projects/2",
    type: "GET",
    get: true,
    template: "/api/projects/:id",
    purpose: "get specific project",
    // backendtest: "no",
    notes: "id, title, description, url, image, timestamp",
  },
  {
    link: "/api/resume",
    type: "GET",
    get: true,
    template: "/api/resume",
    purpose: "gets all resume items",
    // backendtest: "no",
    frontendconnect: "ResumePage",
    notes:
      "id, title, description, type, image and timestamp",
  },
  {
    link: "/api/resume/2",
    type: "GET",
    get: true,
    template: "/api/resume/:id",
    purpose: "get specific Resume",
    // backendtest: "no",
    notes:
      "id, title, description, type, image and timestamp",
  },
  //   {
  //     link: "/api/happy",
  //     type: "POST",
  //     template: "/api/happy",
  //     purpose: "post happy",
  //     backendtest: "yes",
  //     notes: "",
  //   },
  //   {
  //     link: "/api/happy/2",
  //     type: "PUT",
  //     template: "/api/happy/:id - newhappy is request.body",
  //     purpose: "edit happy",
  //     backendtest: "yes",
  //     frontendconnect: "",
  //     notes: "implemented in",
  //   },
  //   {
  //     link: "/api/happy/2",
  //     type: "DELETE",
  //     template: "/api/happy/:id",
  //     purpose: "delete happy",
  //     backendtest: "yes",
  //     frontendconnect: "no",
  //     notes: "implemented in",
  //   },
];
module.exports = { routeInfo };