import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/SignUp/Login/Login";
import Register from "./components/SignUp/Register/Register";
import RequireAuth from "./components/SignUp/RequireAuth/RequireAuth";
import Abouts from "./Pages/Abouts";
import AddItem from "./Pages/AddItem";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import InventoryDetails from "./Pages/InventoryDetails";
import ManageInventories from "./Pages/ManageInventories";
import MyItem from "./Pages/MyItem";
import NotFound from "./Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/manageInventory"
          element={<ManageInventories></ManageInventories>}
        ></Route>
        <Route path="/addItems" element={<AddItem></AddItem>}></Route>
        <Route path="/myItems" element={<MyItem></MyItem>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<Abouts></Abouts>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <InventoryDetails></InventoryDetails>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
