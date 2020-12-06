import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import Repos from "./Repos";
import { ProfileContainer, UserInfoSpan } from "./UserStyled";

const UserDetails = (props) => {
  const [userDetails, setUserDetails] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { username } = props.match.params;
    setLoading(true);
    const userInfoRequests = [
      axios.get(`https://api.github.com/users/${username}`),
      axios.get(
        `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc`
      ),
    ];
    axios.all(userInfoRequests).then(
      axios.spread((...responses) => {
        console.log(responses);
        const [detailsInfo, repoList] = responses;
        detailsInfo.data && setUserDetails(detailsInfo.data);
        repoList.data && setRepos(repoList.data);
        setLoading(false);
      })
    );
  }, [props.match.params]);

  if (loading) {
    return <Loader />;
  }
  const {
    login,
    name,
    location,
    avatar_url,
    bio,
    company,
    html_url,
    following,
    followers,
    public_gists,
    public_repos,
  } = userDetails;
  return (
    <div className="container-fluid mt-4 mb-4">
      <div className="row m-4 p-4 border rounded">
        <ProfileContainer className="col-md-4">
          <img src={avatar_url} alt={name} className="img-thumbnail" />
          <h1> {name} </h1>
          <p>
            Location: <UserInfoSpan> {location} </UserInfoSpan>
          </p>
        </ProfileContainer>
        <div className="col-md-8">
          <ul>
            <li>
              <h5>
                User Name: <UserInfoSpan>{login}</UserInfoSpan>{" "}
              </h5>
            </li>
            {bio && (
              <li>
                <h5>
                  Bio: <UserInfoSpan>{bio}</UserInfoSpan>{" "}
                </h5>
              </li>
            )}
            {company && (
              <li>
                <h5>
                  Company: <UserInfoSpan>{company}</UserInfoSpan>{" "}
                </h5>
              </li>
            )}
            <li>
              <a
                href={html_url}
                className="btn btn-outline-secondary my-2 my-sm-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Github Profile
              </a>
            </li>
            <li className="mt-2">
              <div className="btn btn-secondary">Followers: {followers}</div>
              <div className="btn btn-secondary m-2">
                Following: {following}
              </div>
              <div className="btn btn-secondary m-2">
                Public Repos: {public_repos}
              </div>
              <div className="btn btn-secondary m-2">
                Public Gists: {public_gists}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default UserDetails;
