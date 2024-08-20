import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="container">
        <CssBaseline>
          <Navbar
            check={darkMode}
            change={() => setDarkMode(!darkMode)}
          ></Navbar>
          <Banner></Banner>

          <Footer></Footer>
        </CssBaseline>
      </div>
    </ThemeProvider>
  );
}

export default App;
