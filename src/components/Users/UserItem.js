import React from "react";
import { Link } from "react-router-dom";

import { UserCardContainer } from "./UserStyled";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <UserCardContainer className="card">
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        <img src={avatar_url} alt={login} className="img-thumbnail" />
        <div>
          <Link
            to={`/user/${login}`}
            className="btn btn-sm btn-outline-secondary py-0 my-2"
          >
            More
          </Link>
        </div>
      </div>
    </UserCardContainer>
  );
};
export default UserItem;
