import Topbar from "./topbar/Topbar";
import { CssBaseline } from "@mui/material";
import {COLORS} from "./Values/Colors";
function App() {
  return (
    <div style={{ backgroundColor: COLORS.black }}>
      <CssBaseline />
      <Topbar />
    </div>
  );
}

export default App;
