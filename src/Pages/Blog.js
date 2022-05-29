import React from "react";
import Blogs from "../components/Blogs/Blogs";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <div style={{ marginTop: "150px" }}>
        {" "}
        <Blogs></Blogs>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Blog;
