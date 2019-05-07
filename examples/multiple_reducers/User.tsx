import React, { FC, ChangeEventHandler } from "react";

import { useStore } from "./store";

export const User: FC = () => {
  const [nickname, dispatch] = useStore(({ user }) => user.nickname);

  const updateNickname: ChangeEventHandler<HTMLInputElement> = event => {
    const nickname = event.target.value;

    dispatch({ type: "user::update::nickname", nickname });
  };

  return (
    <div>
      <label>{nickname}</label>
      <input value={nickname} onChange={updateNickname} />
    </div>
  );
};
