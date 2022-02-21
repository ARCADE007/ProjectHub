import Topbar from "./topbar/Topbar";
import { CssBaseline } from "@mui/material";
import Intro from "./Intro/Intro";


function App() {
  return (
    <div >
      <CssBaseline />
      <Topbar />
      <Intro/>
    </div>
  );
}

export default App;
