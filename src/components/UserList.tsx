import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";

export const UserList: React.FC = () => {
  const { error, users, loading } = useTypedSelector((state) => state.user);
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>...Идет загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
