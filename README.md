# React Hookable Store

State Management like Redux

written with React Context & React Hooks

## installation

`React Hookable Store` requires React 16.8.3 or later.

```cmd
# npm
npm install --save react-hookable-store

# yarn
yarn add react-hookable-store
```

## usage

```tsx
// store.ts
import { Reducer } from "react";
import { createStore } from "react-hookable-store";

type Store = number;

type Action = Readonly<
  | {
      type: "increase";
    }
  | {
      type: "decrease";
    }
>;

const createInitialState = (): Store => 0;

const reducer: Reducer<Store, Action> = (store = createInitialState(), action) => {
  switch (action.type) {
    case "increase": {
      return store + 1;
    }
    case "decrease": {
      return store - 1;
    }
  }
};

export const { useStore, useDispatch, useSelector, StoreProvider } = createStore(reducer);

// app.tsx
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

// Count.tsx
import React, { FC } from "react";

import { useStore } from "./store";

export const Count: FC = () => {
  const [count, dispatch] = useStore(store => store);

  return (
    <div>
      <div onClick={() => dispatch({ type: "decrease" })}>- 1</div>
      <div>{count}</div>
      <div onClick={() => dispatch({ type: "increase" })}>+ 1</div>
    </div>
  );
};
```
