import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import axios from "axios";

const UserState = ({ children }) => {
  //ESTADO INICIAL (json fuera del componente)
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const res = await axios.get("https://reqres.in/api/users?page=1");
    console.log(res.data.data);
    dispatch({
      type: "GET_USERS",
      payload: res.data.data,
    });
  };

  const getProfile = async (id) => {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log(res.data.data);
    dispatch({
      type: "GET_PROFILE",
      payload: res.data.data,
    });
  };

  return (
    <>
      <UserContext.Provider
        value={{
          users: state.users,
          selectedUser: state.selectedUser,
          getUsers,
          getProfile,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserState;
