import { createStore, combineReducers } from "../../../src";

import { user } from "./user";

type Store = Readonly<{
  user: import("./user").State;
}>;

type Action = import("./user").Action;

const reducer = combineReducers({ user });

export const { useStore, useSelector, useDispatch, StoreProvider } = createStore<Store, Action>(reducer);
