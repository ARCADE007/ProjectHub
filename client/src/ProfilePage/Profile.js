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
      <div
        style={{
          marginTop: "50px",
          position: "relative",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
