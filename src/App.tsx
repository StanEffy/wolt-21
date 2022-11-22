import React, { createContext, Dispatch, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import { restaurants } from "./restaurantsData";
import SingleRestaurant from "./pages/SingleRestaurant/SingleRestaurant";
import { IRestaurant } from "../types";

function App() {
  const RestaurantContext = createContext<{
    activeRest: IRestaurant | null;
    setActive: (rest: IRestaurant) => void;
  } | null>(null);
  const [activeRest, setActiveRest] = useState<IRestaurant | null>(null);

  const setActive = (rest: IRestaurant) => {
    setActiveRest(rest);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RestaurantContext.Provider value={{ activeRest, setActive }}>
          <Router>
            <Routes>
              <Route path="/:name" element={<SingleRestaurant />} />
              <Route path="/" element={<Home restaurants={restaurants} />} />
            </Routes>
          </Router>
        </RestaurantContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
