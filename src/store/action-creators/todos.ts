import { Dispatch } from "redux";
import axios from "axios";
import {
  fetchTodosAC,
  fetchTodosErrorAC,
  fetchTodosPageAC,
  fetchTodosSuccessAC,
} from "../reducers/todosReducer";

export const getTodos = (page = 1, limit = 10): any => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchTodosAC());
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _page: page, _limit: limit },
        }
      );
      setTimeout(() => {
        dispatch(fetchTodosSuccessAC(response.data));
      }, 500);
    } catch (error) {
      dispatch(fetchTodosErrorAC("Ошибка загрузки списка постов"));
    }
  };
};

export const setTodoPage = (page: number) => {
  return fetchTodosPageAC(page);
};
