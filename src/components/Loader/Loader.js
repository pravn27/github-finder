import React from "react";

import { LoaderContainer } from "./LoaderStyled";

const Loader = () => {
  return (
    <LoaderContainer className="d-flex justify-content-center align-items-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </LoaderContainer>
  );
};

export default Loader;
