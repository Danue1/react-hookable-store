import React, { FC } from "react";
import ReactDOM from "react-dom";

import { StoreProvider } from "./store";

const App: FC = () => (
  <StoreProvider>
    <div>App</div>
  </StoreProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
