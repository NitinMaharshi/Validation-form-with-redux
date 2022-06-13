import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1> You are not eligible to access the site </h1>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Error;
