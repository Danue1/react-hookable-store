import { FC } from "react";

import { useStore } from "./store";

const SECOND = 1000;

export const Count: FC = () => {
  const [count, dispatch] = useStore(store => store);

  const decrease = () => {
    window.setTimeout(() => dispatch({ type: "decrease" }), SECOND);
  };

  const increase = () => {
    window.setTimeout(() => dispatch({ type: "increase" }), SECOND);
  };

  return (
    <div>
      <div onClick={decrease}>- 1</div>
      <div>{count}</div>
      <div onClick={increase}>+ 1</div>
    </div>
  );
};
