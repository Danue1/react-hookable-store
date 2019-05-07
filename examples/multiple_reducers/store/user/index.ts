import { Reducer } from "react";

export type State = Readonly<{
  nickname: string;
}>;

export type Action = Readonly<
  | {
      type: "user::reset";
    }
  | {
      type: "user::update::nickname";
      nickname: string;
    }
>;

const createInitialState = (): State => ({
  nickname: ""
});

export const user: Reducer<State, Action> = (state = createInitialState(), action) => {
  switch (action.type) {
    case "user::reset": {
      return createInitialState();
    }
    case "user::update::nickname": {
      const { nickname } = action;
      return { nickname };
    }
    default: {
      return state;
    }
  }
};
