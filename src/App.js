import { Route, Routes } from "react-router-dom";
import "./App.css";
import Items from "./components/Home/Items/Items";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="items" element={<Items></Items>}></Route>
      </Routes>
    </div>
  );
}

export default App;
