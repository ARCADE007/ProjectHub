import Topbar from "./topbar/Topbar";
import { CssBaseline } from "@mui/material";
import Intro from "./Intro/Intro";
import FeaturedProject from "./featuredProject/FeaturedProject";
import AchievementSection from "./achievementSection/AchievementSection";

function App() {
  return (
    <div>
      <CssBaseline />
      <Topbar />
      <Intro />
      <FeaturedProject />
      <AchievementSection />
    </div>
  );
}

export default App;
