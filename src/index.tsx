import * as React from "react";
import { render } from "react-dom";

import classes from "./styles.module.scss";

function App() {
  return (
    <div className={classes.app}>
      <h1 className={classes.app__title}>Hello CodeSandbox</h1>
      <h2 className={classes.app__subtitle}>
        Start editing to see some magic happen!
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
