import React from "react";
import RepoItemCard from "./RepoItemCard";
import { UserRepoContainer } from "./UserStyled";

const Repos = ({ repos }) => {
  return (
    <div>
      <h3 className="text-secondary text-center">Top 10 Repositories</h3>
      <UserRepoContainer>
        {repos.map((item, index) => {
          return <RepoItemCard key={index} repoInfo={item} />;
        })}
      </UserRepoContainer>
    </div>
  );
};

export default Repos;
