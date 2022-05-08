import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useAuth, logOut } from "../firebase.init";
import { CgMenuMotion } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const currentUser = useAuth();
  async function handleLogOut() {
    try {
      await logOut();
      swal("Logout successfully", `${currentUser?.email}`, "success");
    } catch {
      swal("User logout error");
    }
  }
  return (
    <div className="bg-blue-700 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <Link to="/">GYM Partner</Link>
          </div>
          <div>
            <span
              className="lg:hidden w-10 block h-10 bg-gray-50 flex items-center justify-center text-red-600 text-xl cursor-pointer  transition-all easy-linear duration-300"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <CgMenuMotion style={{ color: "red" }} />
            </span>
          </div>
          <div className="hidden lg:inline-block">
            <ul className="flex items-center justify-center">
              <li className="text-lg font-medium text-gray-200 mr-7">
                <Link to="/home">Home</Link>
              </li>
              <li className="text-lg font-medium text-gray-200 mr-7">
                <Link to="/about">About</Link>
              </li>
              <li className="text-lg font-medium text-gray-200 mr-7">
                <Link to="/services">Services</Link>
              </li>
              <li className="text-lg font-medium text-gray-200 mr-7">
                <Link to="/blogs">Blogs</Link>
              </li>
              {!currentUser?.email && (
                <li className="text-lg font-medium text-gray-200 mr-7">
                  <Link to="/login">Login</Link>
                </li>
              )}
              {currentUser?.email && (
                <li className="text-lg font-medium text-red-600 mr-7">
                  {currentUser?.displayName}
                </li>
              )}
              {currentUser?.email && (
                <li>
                  <button
                    onClick={handleLogOut}
                    className="bg-red-500 py-2 px-6 rounded-full shadow-md text-md font-bold text-white"
                  >
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div
            className={`w-75 px-8 py-6 top-0 bg-blue-600 ${
              showSidebar ? "right-0" : "-right-full"
            } h-screen fixed lg:hidden inline-block text-center transition-all easy-linear duration-300`}
          >
            <span
              className="w-10 block mx-auto h-10 bg-gray-50 flex items-center justify-center text-red-600 text-xl cursor-pointer mb-3"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <GrClose style={{ color: "red" }} />
            </span>
            <ul className="flex items-center justify-center text-center flex-col">
              <li className="text-lg font-medium text-gray-200 text-center mx-auto">
                <Link to="/home">Home</Link>
              </li>
              <li className="text-lg font-medium text-gray-200 mx-auto py-3">
                <Link to="/about">About</Link>
              </li>
              <li className="text-lg font-medium text-gray-200 mx-auto py-3">
                <Link to="/services">Services</Link>
              </li>
              <li className="text-lg font-medium text-gray-200 mx-auto py-3">
                <Link to="/blogs">Blogs</Link>
              </li>
              {!currentUser?.email && (
                <li className="text-lg font-medium text-gray-200 mx-auto py-3">
                  <Link to="/login">Login</Link>
                </li>
              )}
              {currentUser?.email && (
                <li className="text-lg font-medium text-gray-200 mx-auto py-3">
                  {currentUser?.displayName}
                </li>
              )}
              {currentUser?.email && (
                <li>
                  <button
                    onClick={handleLogOut}
                    className="bg-red-500 py-2 px-6 rounded-full shadow-md text-md font-bold text-white"
                  >
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
