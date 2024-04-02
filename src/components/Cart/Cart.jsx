import React, { useContext } from "react";
import styles from "./../Cart/Cart.module.css";
import { ImCross } from "react-icons/im";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import CartItem from "./cart-item/CartItem";
import { context } from "../../utils/context";
const Cart = ({ closeToggle }) => {
  const { cartItem } = useContext(context);
  const subtotal = cartItem.reduce(
    (total, item) => total + item.attributes.price * item.attributes.handleProd,
    0
  );
  return (
    <div className=" h-[100%] w-[100%] fixed flex justify-end">
      <div
        className="cartfull h-[100%] w-[100%] z-1 absolute"
        style={{ backgroundColor: "rgba(0,0,0,0.52)" }}
      ></div>
      <div
        className={`${styles.cartcontent} cartcontain  h-screen  bg-white w-[300px] sm:w-[20%]`}
      >
        <div className="box flex  border border-red-300 p-4 items-center ">
          <h1 className="uppercase bg-red-400 p-2 rounded-sm tracking-tight text-white hover:bg-red-600">
            shopping cart
          </h1>
          <button
            onClick={() => closeToggle(false)}
            className="btn text-[1.1rem] flex items-center cursor-pointer right-1 active:bg-red-300  z-20 absolute whitespace-nowrap text-red-600 bg-pink-100 p-2 font-semibold rounded-full active:scale-95 active:text-pink-100 hover:bg-red-500"
          >
            <ImCross className="text-pink-900 font-semibold" />
          </button>
        </div>
        {cartItem.length === 0 && (
          <div className="cart-details flex justify-center items-center flex-col h-[60%] ">
            <div>
              <MdOutlineRemoveShoppingCart className="text-7xl opacity-55 " />
            </div>
            <h2 className="text-[1.4rem] capitalize">your cart is empty!!</h2>
          </div>
        )}

        {cartItem.length !== 0 && (
          <div className="text-black">
            <CartItem />
          </div>
        )}

        <div className="footer text-center absolute bottom-28 w-full ">
          <div className="flex justify-between items-center m-4 border-y border-slate-400 py-2 ">
            <h1 className="uppercase text-[1.3rem] ">subtotal:</h1>
            <h2 className="text-red-500 text-[1.2rem]"> {subtotal}</h2>
          </div>
          <button className="uppercase w-[80%] p-2 bg-red-400 text-white ">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
