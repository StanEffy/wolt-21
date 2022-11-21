import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import { restaurants } from "./restaurantsData";
import SingleRestaurant from "./pages/SingleRestaurant/SingleRestaurant";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/:name" element={<SingleRestaurant />} />
            <Route path="/" element={<Home restaurants={restaurants} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
