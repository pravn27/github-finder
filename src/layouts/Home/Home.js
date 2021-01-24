import React, { useState, Fragment } from "react";
import axios from "axios";
import NoDataFound from "../../images/NoDataFound.png";
import Search from "../../components/Search/Search";
import Users from "../../components/Users/Users";
import { NoDataImg } from "./HomeStyled";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [emptyResponse, setEmptyResponse] = useState(false);

  const searchInputHandler = async (inputText) => {
    setSearchText(inputText);
    setLoading(true);
    setEmptyResponse(false);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${inputText}`
    );
    if (response.data.items.length === 0) setEmptyResponse(true);
    setUsers(response.data.items);
    setLoading(false);
  };

  const clearSearchResultsHandler = () => {
    setUsers([]);
    setSearchText(null);
  };

  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <span className="h2">Find your favorite github users</span>
          <Search textInputHandler={searchInputHandler} />
        </div>
      </div>
      <Users
        users={users}
        loader={loading}
        searchText={searchText}
        clearSearchResultsHandler={clearSearchResultsHandler}
      />
      {emptyResponse && (
        <NoDataImg
          className="img-fluid"
          src={NoDataFound}
          alt="No data found"
        />
      )}
    </Fragment>
  );
};

export default Home;
