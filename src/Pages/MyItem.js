import React, { useState } from "react";
import MyItems from "../components/MyItems/MyItems";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const MyItem = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <Header></Header>
      <div style={{ marginTop: "150px", marginBottom: "90px" }}>
        <MyItems product={products}></MyItems>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MyItem;
