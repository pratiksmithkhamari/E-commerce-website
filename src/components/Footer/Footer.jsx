import React from "react";
import styles from "../Footer/Footer.module.css";
import paymentImg from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="h-80">
      <div className={`${styles.footerMain} flex  bg-gray-900 text-gray-200`}>
        <div className={`${styles.footerTwo} third w-3/12 p-8 capitalize `}>
          <h1 className="text-[1.3rem]  uppercase mb-7 font-bold tracking-tighter">
            shop
          </h1>
          <h3>headphones</h3>
          <h3>smart watches</h3>
          <h3>bluetooth spekers</h3>
          <h3>wireless earbuds</h3>
          <h3>home theatre</h3>
        </div>
        <div className={`${styles.footerTwo} third w-3/12 p-8 capitalize  `}>
          <h1 className="text-[1.3rem] text-white uppercase mb-7 font-bold tracking-tighter">
            contact
          </h1>
          <h3>block rd,sohela,bargarh,odisha,768033</h3>
          <h3>return policy</h3>
          <h3>phone:0346 673 1234</h3>
          <h3 className="normal-case">Email :pratiksmith40@gmail.com</h3>
        </div>
        <div className={`${styles.footerTwo} third w-3/12 p-8 capitalize  `}>
          <h1 className="text-[1.3rem]  uppercase mb-7 font-bold tracking-tighter">
            pages
          </h1>
          <h3 onClick={() => navigate("/")} className="cursor-pointer">
            home
          </h3>
          <h3>about</h3>
          <h3>privacy policy</h3>
          <h3>returns</h3>
          <h3>terms and condition</h3>
        </div>
        <div className={`${styles.footerTwo} third w-3/12 p-8 capitalize `}>
          <h1 className="text-[1.3rem]  uppercase mb-7 font-bold tracking-tighter">
            about
          </h1>
          <h3>Track your order</h3>
          <h3>warrebty and support</h3>
          <h3>return policy</h3>
          <h3>service centers</h3>
          <h3>bulk orders</h3>
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <div className="">
          <h2 className="uppercase text-[1.3rem] font-semibold font-sans text-center text-wrap">
            khamaristore created by pratik.dev premmium e-commerce solution
          </h2>
        </div>
        <div className="flex justify-center">
          <img src={paymentImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
