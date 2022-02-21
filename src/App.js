import Topbar from "./topbar/Topbar";
import { CssBaseline } from "@mui/material";
import Intro from "./Intro/Intro";
import FeaturedProject from "./featuredProject/FeaturedProject";


function App() {
  return (
    <div >
      <CssBaseline />
      <Topbar />
      <Intro/>
      <FeaturedProject/>
    </div>
  );
}

export default App;
