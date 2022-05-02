import React from "react";

//Components
import Profile from "./components/Profile";
import UserList from "./components/UserList";

//Context
import UserState from "./context/User/UserState";

const App = () => {
  return (
    <>
      <UserState>
        <UserList />
        <Profile />
      </UserState>
    </>
  );
};

export default App;
