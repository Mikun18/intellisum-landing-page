import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Home from "./pages/home";

theme.breakpoints.mobile= theme.breakpoints[0]
theme.breakpoints.sm = theme.breakpoints[1]
theme.breakpoints.md = theme.breakpoints[2]
theme.breakpoints.lg = theme.breakpoints[3]
theme.breakpoints.xl = theme.breakpoints[4]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
