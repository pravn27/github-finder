import React from "react";

import UserItem from "./UserItem";
import Loader from "../Loader/Loader";

import { HomeUsersContainer } from "./UserStyled";

const Users = ({ users, loader }) => {
  if (loader) {
    return <Loader />;
  }
  return (
    <HomeUsersContainer className="container-fluid">
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </HomeUsersContainer>
  );
};

export default Users;
