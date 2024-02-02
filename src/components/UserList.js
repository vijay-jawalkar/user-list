import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setUsers(json);
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {users &&
        users.map((user, index) => {
          return <UserCard key={index} user={user} />;
        })}
    </div>
  );
}

export default UserList;
