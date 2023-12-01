export type TodosStateType = {
  todos: TodoType[];
  isLoading: boolean;
  error: null | string;
  page: number;
  limit: number;
};

export enum TodosActionstype {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  FETCH_TODOS_PAGE = "FETCH_TODOS_PAGE",
}

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type FetchTodosAction = {
  type: TodosActionstype.FETCH_TODOS;
};

type FetchTodosSuccessAction = {
  type: TodosActionstype.FETCH_TODOS_SUCCESS;
  payload: TodoType[];
};

type FetchTodosErrorAction = {
  type: TodosActionstype.FETCH_TODOS_ERROR;
  payload: string;
};

type FetchTodosPageAction = {
  type: TodosActionstype.FETCH_TODOS_PAGE;
  payload: number;
};

export type TodoActionsType =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction
  | FetchTodosPageAction;
