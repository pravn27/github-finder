import React, { useState } from "react";
import { SearchContainer } from "./SearchStyled";

const Search = ({ textInputHandler }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.length > 0) {
      textInputHandler(inputText);
    }
  };

  return (
    <SearchContainer className="form-inline mt-2" onSubmit={handleSubmit}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="searchInput"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">
        Search
      </button>
    </SearchContainer>
  );
};

export default Search;
