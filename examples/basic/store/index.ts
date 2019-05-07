import { Reducer } from "react";

import { createStore } from "../../../src";

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

const reducer: Reducer<Store, Action> = (state = createInitialState(), action) => {
  switch (action.type) {
    case "increase": {
      return state + 1;
    }
    case "decrease": {
      return state - 1;
    }
    default: {
      return state;
    }
  }
};

export const { useStore, useSelector, useDispatch, StoreProvider } = createStore(reducer);
