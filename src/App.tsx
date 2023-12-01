import "./App.css";
import TodoList from "./components/TodoList";
import { UsersList } from "./components/UsersList";

function App() {
  return (
    <>
      <UsersList />
      <TodoList />
    </>
  );
}

export default App;
