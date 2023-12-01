import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

type Props = {};

function TodoList(props: Props) {
  const {} = props;
  const { error, isLoading, limit, page, todos } = useTypedSelector(
    (state) => state.todos
  );
  const { getTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    getTodos(page, limit);
  }, [page]);

  if (isLoading) {
    return (
      <div>
        <img style={{ width: 100 }} src="src\assests\preloader.gif" />
      </div>
    );
  }

  if (error) {
    return <h2 style={{ color: "red", fontSize: 32 }}>{error}</h2>;
  }

  return (
    <div style={{ padding: 10 }}>
      <h2 style={{ marginBottom: 10 }}>Список постов:</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id}. {todo.title}
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "10px 0",
          cursor: "pointer",
        }}
      >
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            key={p}
            style={{
              border: p === page ? "2px solid green" : "1px solid gray",
              padding: 8,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
