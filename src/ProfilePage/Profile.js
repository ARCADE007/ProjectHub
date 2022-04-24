import React from "react";
import Footer from "../footer/Footer";
import { COLORS } from "../Values/Colors";
import TechStack from "../TechStack/TechStack";
import Topbar from "../topbar/Topbar";
import { CssBaseline } from "@mui/material";
import Intro from "../Intro/Intro";
import FeaturedProject from "../featuredProject/FeaturedProject";
import AchievementSection from "../achievementSection/AchievementSection";

function Profile() {
  return (
    <div style={{ backgroundColor: COLORS.primary1 }}>
      <CssBaseline />
      <Topbar />
      <Intro />
      <TechStack />
      <FeaturedProject />
      <AchievementSection />
      <div style={{ marginTop: "15px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
