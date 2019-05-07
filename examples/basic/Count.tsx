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
