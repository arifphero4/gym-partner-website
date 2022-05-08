import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import ServiceDetail from "./pages/ServiceDetail";
import { createContext, useState } from "react";
import useFetch from "./hooks/useFetch";
import PrivateRoute from "./pages/Login/PrivateRoute";
import inventory from "./pages/Login/inventory";
import manageInventory from "./pages/Login/manageInventory";
import NotFound from "./pages/NotFound";

export const useServices = createContext();
function App() {
  const [services] = useFetch();
  return (
    <useServices.Provider value={[services]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="details/:id" element={<PrivateRoute />} />
        <Route path="inventory/:id" element={<inventory />} />
        <Route path="manageInventory/:id" element={<manageInventory />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </useServices.Provider>
  );
}

export default App;
