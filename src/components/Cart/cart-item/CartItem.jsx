import React, { useContext } from "react";
import cartImg from "./../../../assets/productsImgs/headphone-prod-5.webp";
import { context } from "../../../utils/context";
import { API_URL } from "../../../utils/constant";
import { RxCross2 } from "react-icons/rx";

const CartItem = () => {
  const { handleRemoveCart, cartItem, handleCartProduct } = useContext(context);
  console.log(cartItem);
  console.log(API_URL + cartItem[0]?.attributes?.img?.data[0].attributes.name);

  console.log(cartItem[0]?.attributes?.price);

  return (
    <div>
      <div className="main ">
        {cartItem.map((item) => {
          return (
            <div
              className="flex p-3 m-1 hover:bg-gray-200 relative "
              key={item.id}
            >
              <RxCross2
                className="text-black font-semibold absolute right-0 top-1 text-[1.2rem] cursor-pointer"
                onClick={() => handleRemoveCart(item)
                          
                }
              />
              <img
                src={API_URL + item?.attributes?.img?.data[0].attributes.url}
                alt=""
                className="h-14 w-14 mr-1"
              />

              <div className="overflow-hidden">
                <h2 className="capitalize text-ellipsis overflow-hidden whitespace-nowrap  block mb-2">
                  {item?.attributes?.title}
                </h2>
                <div className="flex gap-2 border items-center border-black w-20 m-2">
                  <span
                    className="flex justify-center w-5 cursor-pointer"
                    onClick={()=>handleCartProduct("dec", item)}
                  >
                    -
                  </span>
                  <span className="border-x border-black w-10 flex justify-center">
                    {item?.attributes?.handleProd}
                  </span>
                  <span
                    className="flex justify-center w-5 cursor-pointer"
                    onClick={()=>handleCartProduct("inc", item)}
                  >
                    +
                  </span>
                </div>
                <div className="flex gap-2">
                  <span>{item?.attributes?.handleProd}</span>
                  <span>x</span>
                  <span className="text-red-500">
                    {item?.attributes?.price * item?.attributes?.handleProd}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItem;
