import React, { useContext } from "react";
import { themeVal } from "./App";
function ThemeProvider() {
  const theme = useContext(themeVal);
  return (
    <>
      <h1>theme context</h1>
      <h2>Theme context is {theme}</h2>
    </>
  );
}

export default ThemeProvider;
