import React, { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import Cart from "../Cart/Cart";
import { context } from "./../../utils/context";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";

const Header = () => {
  const [screenScroll, setScreenScroll] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const { cartCount, cartItem } = useContext(context);

  const handleToogle = () => {
    setShowCart(!showCart);
  };

  const handleSearh = () => {
    setShowSearch(!showSearch);
  };

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScreenScroll(true);
    } else {
      setScreenScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalCount = cartItem.reduce(
    (total, item) => total + item.attributes.handleProd,
    0
  );

  return (
    <div className="relative">
      <div
        className={`main-header w-screen bg-gray-900  bg-opacity-655 backdrop-blur-lg px-16 h-16 text-white  ${
          screenScroll
            ? "fixed  top-0 transition-all ease-in md:animate-moveNavbar animate-moveNavbar"
            : ""
        }`}
      >
        <nav className="flex  md:max-w-[75%] my-0 mx-auto h-14 items-center justify-between capitalize md:flex">
          <div className="hidden gap-11 font-semibold uppercase md:flex md:gap-11">
            <h2
              className="cursor-pointer hover:border-b border-purple-400 "
              onClick={() => navigate("/")}
            >
              Home
            </h2>
            <h2
              className="cursor-pointer hover:border-b border-purple-400"
              onClick={() => navigate("/about")}
            >
              about
            </h2>
            <h2
              className="cursor-pointer hover:border-b border-purple-400"
              onClick={() => navigate("/catagory/:id")}
            >
              catagory
            </h2>
          </div>
          <div>
            <h1 onClick={() => navigate("/")} className="cursor-pointer">
              your-store
            </h1>
          </div>

          <div className="flex gap-3 items-center md:gap-10">
            <CiSearch
              className="text-xl cursor-pointer hover:text-[1.3rem] active:scale-90"
              onClick={handleSearh}
            />
            <CiHeart className="text-xl cursor-pointer hover:text-[1.3rem]" />
            <span onClick={handleToogle}>
              <GiShoppingCart className="text-xl cursor-pointer relative hover:text-[1.3rem] active:scale-90 " />
              {cartCount !== 0 && (
                <span className="md:absolute absolute right-12 top-4 h-5 min-w-5 text-sm rounded-full bg-pink-900 flex justify-center items-center md:top-3 md:right-[229px]">
                  {totalCount}
                </span>
              )}
            </span>
          </div>
        </nav>
      </div>
      {showCart && <Cart closeToggle={setShowCart} />}
      {showSearch && <Search closeSearch={setShowSearch} />}
    </div>
  );
};

export default Header;
