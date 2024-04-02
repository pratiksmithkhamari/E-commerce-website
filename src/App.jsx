import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import SingleProduct from "./components/single-product/SingleProduct";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import FooterOne from "./components/Footer/FooterOne";
import MyContext from "./utils/context";
import CatagoryThree from "./components/CatagoryThreeFile/CatagoryThree";




function App() {
  return (
    <>
      <BrowserRouter>
      <MyContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catagory/:id" element={<CatagoryThree />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
        </Routes>
        <FooterOne />
        <Footer />
        </MyContext>
      </BrowserRouter>
    </>
  );
}

export default App;
