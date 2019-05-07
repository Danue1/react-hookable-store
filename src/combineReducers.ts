import { Reducer } from "react";

type Reducers<Store> = Readonly<{ [Key in keyof Store]: Reducer<Store[Key], any> }>;

export const combineReducers = <Store extends Record<string, any>, Action>(reducers: Reducers<Store>) => {
  const reducer: Reducer<Store, Action> = (store = {} as Store, action) => {
    const nextStore = {} as Store;

    let isChanged = false;

    for (const key in reducers) {
      const reducer = reducers[key];
      const previousState = store[key];
      const nextState = reducer(previousState, action);
      nextStore[key] = nextState;
      if (!isChanged) {
        isChanged = previousState !== nextState;
      }
    }

    return isChanged ? nextStore : store;
  };

  return reducer;
};
