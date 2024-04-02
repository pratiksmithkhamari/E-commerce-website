import React, { useEffect, useRef, useState } from "react";
import bannerImg from "../../assets/banner-img.png";
import styles from "../Banner/Banner.module.css";

const Banner = (props) => {

  const [handleBtn, setHandleBtn] = useState(false);
  const [handleBtnShop, setHandleBtnShop] = useState(true);
  const handleRead = () => {
    setHandleBtn(!handleBtn);
  };
  const handleShop = () => {
    setHandleBtnShop(!handleBtnShop);
  };

  return (
    <div
      className={
        styles.banner +
        " bg-gradient-to-tr from-violet-900 to-pink-900 flex items-center justify-center min-w-screen"
      }
    >
      <div className="flex justify-center items-center flex-col  w-[50%] ">
        <div className={`${styles.header} + "ml-48 mb-20`}>
          <h1
            className={`${styles.headingText} uppercase text-center text-[9rem] font-[600] font-sans text-white tracking-tight`}
          >
            Sales
          </h1>
          <h2 className="w-96 text-white tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            inventore iure eum at provident ipsum assumenda, ducimus
          </h2>
        </div>
        <div className={`${styles.buttons} flex  ml-67 `}>
          <button
            className={`
              
              cursor-pointer uppercase border-2 p-3 ${
                handleBtn ? "bg-white text-black" : "text-white"
              } `}
            onClick={handleRead}
          >
            read more
          </button>
          <button
            className={` cursor-pointer uppercase border-2 p-3 ${
              handleBtnShop ? "bg-white text-black" : "text-white"
            } `}
            onClick={handleShop}
          >
            shop now
          </button>
        </div>
      </div>
      <div className="h-screen bg-center flex items-center justify-center w-[50%] mr-14">
        <img
          src={bannerImg}
          
          alt="banner"
          className={`${styles.descriptionImg} max-h-[90%]`}
        />
      </div>
    </div>
  );
};

export default Banner;
