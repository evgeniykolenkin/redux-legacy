import { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

type PropsType = {};

export function UsersList(props: PropsType) {
  const {} = props;

  const { error, isLoading, users } = useTypedSelector((state) => state.users);
  const { getUsers } = useActions();

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return (
      <div>
        <img style={{ width: 100 }} src="src/assests/preloader.gif" />
      </div>
    );
  }

  if (error) {
    return <h2 style={{ color: "red", fontSize: 32 }}>{error}</h2>;
  }

  return (
    <ul
      style={{
        padding: 10,
        borderBottom: "1px solid blue",
      }}
    >
      <h2 style={{ marginBottom: 10 }}>Cписок пользователей:</h2>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
