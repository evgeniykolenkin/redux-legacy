import { combineReducers } from "redux";
import { userReducer } from "./usersReducer";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers({
  users: userReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
