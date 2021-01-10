import React from "react";
import UserItem from "./UserItem";
import Loader from "../Loader/Loader";
import { HomeUsersContainer, SearchTextInfoContainer } from "./UserStyled";

const Users = ({ users, loader, searchText, clearSearchResultsHandler }) => {
  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <SearchTextInfoContainer className="my-2">
        {searchText && (
          <h6 className="mx-2">
            Search keyword: <span className="lead">{searchText}</span>
          </h6>
        )}
        {users.length > 0 && (
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => clearSearchResultsHandler()}
          >
            Clear Results
          </button>
        )}
      </SearchTextInfoContainer>
      <HomeUsersContainer className="container-fluid">
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </HomeUsersContainer>
    </>
  );
};

export default Users;
