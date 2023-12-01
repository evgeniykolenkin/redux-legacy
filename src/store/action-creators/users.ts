import { Dispatch } from "redux";
import axios from "axios";
import {
  fetchUsersAC,
  fetchUsersErrorAC,
  fetchUsersSuccessAC,
} from "../reducers/usersReducer";

export const getUsers = (): any => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchUsersAC());
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        dispatch(fetchUsersSuccessAC(response.data));
      }, 500);
    } catch (error) {
      dispatch(fetchUsersErrorAC("Ошибка загрузки пользователей"));
    }
  };
};
