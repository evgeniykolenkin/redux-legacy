import {
  TodoActionsType,
  TodoType,
  TodosActionstype,
  TodosStateType,
} from "../../types/todos";

const initialState: TodosStateType = {
  todos: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 40,
};

export const todosReducer = (
  state = initialState,
  action: TodoActionsType
): TodosStateType => {
  switch (action.type) {
    case TodosActionstype.FETCH_TODOS:
      return { ...state, isLoading: true };
    case TodosActionstype.FETCH_TODOS_SUCCESS:
      return { ...state, isLoading: false, todos: action.payload };
    case TodosActionstype.FETCH_TODOS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case TodosActionstype.FETCH_TODOS_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export const fetchTodosAC = () => ({
  type: TodosActionstype.FETCH_TODOS,
});

export const fetchTodosSuccessAC = (payload: TodoType[]) => ({
  type: TodosActionstype.FETCH_TODOS_SUCCESS,
  payload,
});

export const fetchTodosErrorAC = (payload: string) => ({
  type: TodosActionstype.FETCH_TODOS_ERROR,
  payload,
});

export const fetchTodosPageAC = (payload: number) => ({
  type: TodosActionstype.FETCH_TODOS_PAGE,
  payload,
});
