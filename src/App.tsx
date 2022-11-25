import React, { createContext, Dispatch, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { restaurants } from "./restaurantsData";
import SingleRestaurant from "./pages/SingleRestaurant/SingleRestaurant";
import { IRestaurant } from "../types";
import { RestaurantContext } from "./RestaurantContext";

function App() {
  const [activeRest, setActiveRest] = useState<IRestaurant | null>(null);

  const setActive = (rest: IRestaurant | null) => {
    setActiveRest(rest);
  };

  return (
    <div className="App">
      <h1>Restaurants</h1>
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
