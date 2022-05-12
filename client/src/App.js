import OpenProject from "./openProject/OpenProject";
import { Context } from "./context/Context";
import React, { useContext } from "react";
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
  const { user } = useContext(Context);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <OpenProject />
        </Route>
        {/* <Route path="/AddLinks">{!user ? <OpenProject /> : <AddLinks />}</Route>
        <Route path="/AddHonor">{!user ? <OpenProject /> : <AddHonor />}</Route> */}
        {/* <Route path="/AddTechIcon">
          {!user ? <OpenProject /> : <AddTechIcon />}
        </Route> */}
        {/* <Route path="/Profile">{!user ? <OpenProject /> : <Profile />}</Route> */}
        <Route path="/ProjectDetails/:projectId">
          {!user ? <OpenProject /> : <ProjectDetails />}
        </Route>
        <Route path="/AddProfile">
          {!user ? <OpenProject /> : <UserProfile />}
        </Route>
        <Route path="/AddProject">
          {!user ? <OpenProject /> : <AddProject />}
        </Route>
        <Route path="/Login">{user ? <OpenProject /> : <Login />}</Route>
        <Route path="/Register">{user ? <OpenProject /> : <Register />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
