import Topbar from "./topbar/Topbar";
import { CssBaseline } from "@mui/material";
import Intro from "./Intro/Intro";
import FeaturedProject from "./featuredProject/FeaturedProject";
import AchievementSection from "./achievementSection/AchievementSection";
import Footer from "./footer/Footer";
import OpenProject from "./openProject/OpenProject";
import { COLORS } from "./Values/Colors";
import TechStack from "./TechStack/TechStack";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Profile">
          <div style={{ backgroundColor: COLORS.primary1 }}>
            <CssBaseline />
            <Topbar />
            <Intro />
            <TechStack />
            <FeaturedProject />
            <AchievementSection />
            <Footer />
          </div>
        </Route>
        <Route>
          <OpenProject />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
