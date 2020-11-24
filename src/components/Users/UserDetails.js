import React, { useState, useEffect } from "react";

import axios from "axios";

const UserDetails = (props) => {
  //   console.log(props);
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
      })
    );
  }, []);

  return (
    <div>
      <h2>User details</h2>
    </div>
  );
};

export default UserDetails;
