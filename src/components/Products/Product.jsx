import React from "react";
import productImg from "../../assets/productsImgs/earbuds-prod-3.webp";
import styles from "../Products/Product.module.css";
import { API_URL } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
const Product = ({ id, data }) => {
  const navigate = useNavigate()
  return (
    <div
      className={`${styles.mainDiv} w-72 flex flex-col p-5 min-h-80 justify-center bg-emerald-500] cursor-pointer`}
    >
      <div
        className={`${styles.prodBox} bg-slate-200 p-5 h-64 max-w-60 shadow-md `} onClick={()=>navigate('/single-product/ ' + id)}
      >
        <img
          src={API_URL + data.img.data[0].attributes.url}
          alt="product"
          className={`${styles.prodImg} h-full w-full hover:scale-[1.08] transition-all ease-in block`}
        />
      </div>
      <div className="mt-4 w-[100%]">
        <h2 className=" text-ellipsis overflow-hidden font-bold text-slate-800 whitespace-nowrap w-full">
          {data.title}
        </h2>
        <h2 className="text-slate-700">₹ {data.price}</h2>
      </div>
    </div>
  );
};

export default Product;
