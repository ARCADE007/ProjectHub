import Topbar from "./topbar/Topbar";
import { CssBaseline } from "@mui/material";
import Intro from "./Intro/Intro";
import FeaturedProject from "./featuredProject/FeaturedProject";
import AchievementSection from "./achievementSection/AchievementSection";
import Footer from "./footer/Footer";
import { COLORS } from "./Values/Colors";
import TechStack from "./TechStack/TechStack";

function App() {
  return (
    <div style={{ backgroundColor: COLORS.primary1 }}>
      <CssBaseline />
      <Topbar />
      <Intro />
      <TechStack />
      <FeaturedProject />
      <AchievementSection />
      <Footer />
    </div>
  );
}

export default App;
