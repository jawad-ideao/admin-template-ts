// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import routes, { renderRoutes } from "./routes";
import { createdTheme } from "./theme";

const theme = createdTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{renderRoutes(routes as any)}</BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
