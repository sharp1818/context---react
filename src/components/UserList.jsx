import React, { useEffect, useContext } from "react";
import UserContext from "../context/User/UserContext";

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);
  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  return (
    <>
      <div>
        {users.map((user) => (
          <a href="#!" key={user.id} onClick={() => getProfile(user.id)}>
            <img src={user.avatar} alt="" />
            <p>{`${user.first_name} ${user.last_name}`}</p>
          </a>
        ))}
      </div>
    </>
  );
};

export default UserList;
