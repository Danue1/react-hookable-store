import React, { FC } from "react";
import ReactDOM from "react-dom";

import { StoreProvider } from "./store";
import { Count } from "./Count";

const App: FC = () => (
  <StoreProvider>
    <Count />
  </StoreProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
