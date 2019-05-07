import { createElement, createContext, Dispatch, FC, Reducer, useContext, useReducer, useMemo } from "react";

export const createStore = <S, A>(reducer: Reducer<S, A>) => {
  const Context = createContext<[S, Dispatch<A>]>(null as any);

  type Selector<SS> = (store: S) => SS;
  const useStore = <SS>(selector: Selector<SS>, dependencies?: any[]): [SS, Dispatch<A>] => {
    const [store, dispatch] = useContext(Context);
    return useMemo(() => [selector(store), dispatch], dependencies);
  };
  const useDispatch = () => useContext(Context)[1];
  const useSelector = <SS>(selector: Selector<SS>, dependencies?: any[]) => {
    const [store] = useContext(Context);
    return useMemo(() => selector(store), dependencies);
  };

  const initialStore = reducer((undefined as any) as S, {} as A);
  const StoreProvider: FC = ({ children }) =>
    createElement(Context.Provider, { value: useReducer(reducer, initialStore) }, children);

  return {
    useStore,
    useDispatch,
    useSelector,
    StoreProvider
  };
};
