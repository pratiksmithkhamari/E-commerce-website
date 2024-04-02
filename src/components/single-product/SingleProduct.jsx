import React, { useContext, useState } from "react";
import prodImg from "../../assets/productsImgs/headphone-prod-2.webp";
import { BiShoppingBag } from "react-icons/bi";
import styles from "./../single-product/SIngleProduct.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import RelatedProducts from "./related-products/RelatedProducts";
import { useParams } from "react-router-dom";
import useFetchAllData from "../hooks/useFetchAllData";
import { API_URL } from "../../utils/constant";
import { context } from "../../utils/context";

const SingleProduct = () => {
  const [handleProd, setHandleProd] = useState(1);

  const { handleAddItems, handleRemoveCart } = useContext(context);

  const increment = () => {
    setHandleProd((prev) => prev + 1);
  };
  const decrement = () => {
    setHandleProd((prev) => {
      if (prev == 1) return 1;
      return prev - 1;
    });
  };

  const { id } = useParams();
  const { apiData } = useFetchAllData(
    `/api/products?populate=*&[filters][id]=${id}`
  );

  if (!apiData) return;
  const product = apiData?.data?.data?.[0]?.attributes;
  console.log(apiData.data.data[0]);

  return (
    <div className="">
      <h1 className="m-8 font-bold text-2xl uppercase">product details</h1>
      <div className={`${styles.header} flex gap-9 m-14`}>
        <div className="bg-blue-100  h-[450px] max-w-96 flex justify-center items-center ">
          <img
            src={API_URL + product?.img?.data[0]?.attributes?.url}
            alt=""
            className="hover:scale-[1.07] transition-all ease-in"
          />
          
        </div>
        <div className={`${styles.handlepage} w-[55%]`}>
          <h3 className="font-semibold text-[1.3rem] capitalize">
            {product.title}
          </h3>
          <h3 className="font-semibold capitalize text-[1.2rem] mt-3">
            ₹ {product.price}
          </h3>
          <p className={`${styles.describ} text-slate-700 mt-3 text-wrap`}>
            {product.description}
          </p>
          <div className="w-64">
            <div className="flex items-center gap-6 mt-8">
              <div className="border border-black min-w-[37%] h-9 flex justify-evenly items-center ">
                <span
                  className=" w-[100%] text-center cursor-pointer"
                  onClick={decrement}
                >
                  -
                </span>
                <span className="border border-x-black w-[100%] h-full flex items-center justify-center cursor-pointer">
                  {handleProd}
                </span>
                <span
                  className=" w-[100%] text-center cursor-pointer"
                  onClick={increment}
                >
                  +
                </span>
              </div>

              <button
                className="bg-gradient-to-tr  w-50% from-violet-800 to-pink-600 text-white p-2 rounded uppercase flex items-center whitespace-nowrap"
                onClick={() => {
                  handleAddItems(apiData?.data?.data[0], handleProd);
                  setHandleProd(1)
                }}
              >
                <BiShoppingBag className="text-[1.3rem] " />
                add to card
              </button>
            </div>
            <div className="mt-5 w-96 ">
              <h2 className="text-[1.2rem] font-semibold capitalize ">
                description:{" "}
                <span className="text-slate-600">
                  {product.catagories.data[0].attributes.title}
                </span>
              </h2>
              <div className="w-full whitespace-normal flex items-center gap-1 mt-3">
                <h1 className="text-[1.2rem] font-semibold capitalize">
                  {" "}
                  share:
                </h1>
                <span className="flex gap-1 items-center text-slate-600 cursor-pointer">
                  <FaInstagram className="" />
                  <FaFacebookF />
                  <FaYoutube />
                  <FaLinkedin />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts prodId={id} catagoryId={product.catagories.data[0].id} />
    </div>
  );
};

export default SingleProduct;
