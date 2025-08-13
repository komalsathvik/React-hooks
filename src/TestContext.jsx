import React, { useContext } from "react";
import { themeVal } from "./App";
function TestContext() {
  //   const theme = useContext(themeVal);
  return (
    <>
      <h1>Testing context</h1>
      <themeVal.Consumer>
        {(theme) => <h2>Testing value is {theme}</h2>}
      </themeVal.Consumer>
    </>
  );
}

export default TestContext;
