export type UsersStateType = {
  users: any[];
  isLoading: boolean;
  error: null | string;
};

export enum UsersActionsTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

type FetchUsersActionType = {
  type: UsersActionsTypes.FETCH_USERS;
};
type FetchUsersSuccessActionType = {
  type: UsersActionsTypes.FETCH_USERS_SUCCESS;
  payload: any[];
};
type FetchUsersErrorActionType = {
  type: UsersActionsTypes.FETCH_USERS_ERROR;
  payload: string;
};

export type UsersAction =
  | FetchUsersActionType
  | FetchUsersSuccessActionType
  | FetchUsersErrorActionType;
