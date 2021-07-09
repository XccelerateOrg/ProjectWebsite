import React from "react";
import BlogsPage from "../pages/BlogsPage";
import ContactUsPage from "../pages/ContactUsPage";
import EachBlogPage from "../pages/EachBlogPage";
import EachProjectPage from "../pages/EachProjectPage";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ResumePage from "../pages/ResumePage";
import ErrorPage from "../pages/ErrorPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/projects"
          component={ProjectsPage}
        />
        {/* If they go to links/:id, then render the link detail component */}
        {/* This component just renders out additional information about that link */}
        <Route
          path="/projects/:id"
          component={EachProjectPage}
        />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default Navbar;