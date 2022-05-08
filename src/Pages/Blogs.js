import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 min-h-screen">
          <div>
              <h1 className="py-6 shadow-lg mt-4 text-center font-bold text-gray-900 text-4xl">My Blogs</h1>
          </div>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div className="shadow-lg rounded-md p-4" key={index}>
              <div>
                <strong className="text-gray-800 font-medium text-xl">{blog?.title}</strong>
                <p className="text-md font-medium text-gray-600 pt-4">{blog?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
