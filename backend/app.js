const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const ProjectService = require("./services/projects");
const ProjectRouter = require("./routers/projects");
const ResumeService = require("./services/resume");
const ResumeRouter = require("./routers/resume");
const app = express();
const routeInfo = require("./routeInfo").routeInfo;
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);
const PORT = 3001;

app.use(cors());
app.engine("handlebars", exphbs());
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(bodyParser.json());

const projectService = new ProjectService(knex);
const resumeService = new ResumeService(knex);
const projectRouter = new ProjectRouter(projectService);
const resumeRouter = new ResumeRouter(resumeService);

app.use("/", projectRouter.router());
app.use("/", resumeRouter.router());

app.get("/", (request, response) => {
  response.render("intro", {
    routeInfo: routeInfo,
  });
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
