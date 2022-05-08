import React from "react";
import error from "../image/error.png";
import Header from "../Shared/Header";
const NotFound = () => {
  return (
    <div>
      <Header></Header>
      <img src={error} alt="" />
    </div>
  );
};

export default NotFound;
