import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeProvider from "./ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestContext from "./TestContext";

export const themeVal = React.createContext();

function App() {
  return (
    <>
      <themeVal.Provider value={"dark"}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>UseContext hooks</h1>
                  <ThemeProvider />
                </>
              }
            />
            <Route path="/test" element={<TestContext />} />
          </Routes>
        </BrowserRouter>
      </themeVal.Provider>
    </>
  );
}

export default App;
