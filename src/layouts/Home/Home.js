import React, { useState, Fragment } from "react";
import axios from "axios";

import Search from "../../components/Search/Search";
import Users from "../../components/Users/Users";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchInputHandler = async (inputText) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${inputText}`
    );
    setUsers(response.data.items);
    setLoading(false);
  };

  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <span className="h2">Find your favorite github users</span>
          <Search textInputHandler={searchInputHandler} />
        </div>
      </div>
      <Users users={users} loader={loading} />
    </Fragment>
  );
};

export default Home;
