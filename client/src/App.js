import OpenProject from "./openProject/OpenProject";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./ProfilePage/Profile";
import ProjectDetails from "./projectDetails/ProjectDetails";
import UserProfile from "./forms/UserProfile";
import Login from "./forms/Login";
import Register from "./forms/Register";
import AddTechIcon from "./forms/AddTechIcon";
import AddHonor from "./forms/AddHonor";
import AddLinks from "./forms/AddLinks";
import AddProject from "./forms/AddProject";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/AddLinks">
          <AddLinks />
        </Route>
        <Route path="/AddHonor">
          <AddHonor />
        </Route>
        <Route path="/AddTechIcon">
          <AddTechIcon />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/ProjectDetails">
          <ProjectDetails />
        </Route>
        <Route path="/AddProfile">
          <UserProfile />
        </Route>
        <Route path="/AddProject">
          <AddProject />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/">
          <OpenProject />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
