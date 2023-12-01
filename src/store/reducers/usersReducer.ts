import {
  UsersAction,
  UsersActionsTypes,
  UsersStateType,
} from "../../types/users";

const initialState: UsersStateType = {
  users: [],
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UsersAction
): UsersStateType => {
  switch (action.type) {
    case UsersActionsTypes.FETCH_USERS:
      return { isLoading: true, error: null, users: [] };
    case UsersActionsTypes.FETCH_USERS_SUCCESS:
      return { isLoading: false, error: null, users: action.payload };
    case UsersActionsTypes.FETCH_USERS_ERROR:
      return { isLoading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};

export const fetchUsersAC = () => ({
  type: UsersActionsTypes.FETCH_USERS,
});
export const fetchUsersSuccessAC = (payload: any[]) => ({
  type: UsersActionsTypes.FETCH_USERS_SUCCESS,
  payload,
});
export const fetchUsersErrorAC = (payload: string) => ({
  type: UsersActionsTypes.FETCH_USERS_ERROR,
  payload,
});
