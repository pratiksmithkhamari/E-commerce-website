import React, { useEffect, useContext } from "react";
import Banner from "../../components/Banner/Banner";
import Catagory from "../catagory/Catagory";
import Products from "../Products/Products";
import styles from "./../Home/Home.module.css";
import { fetchData } from "../../utils/constant";
import { context } from "../../utils/context";

const Home = () => {
  const { catagories, setCatagories, products, setProducts } =
    useContext(context);

  useEffect(() => {
    getCatagory();
    getProducts();
  }, []);

  const getCatagory = () => {
    fetchData("/api/catagories?populate=*").then((res) => {
      console.log(res);
      setCatagories(res);
    });
  };

  const getProducts = () => {
    fetchData("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  return (
    <div className="">
      <Banner />
      <div className={`${styles.homes} max-w-[80%] my-0 mx-auto`}>
        <Catagory catagories={catagories} />
        <Products products={products} headText="Popular Products" />
      </div>
    </div>
  );
};

export default Home;
