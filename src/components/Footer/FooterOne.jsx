import React from "react";
import imagesbg from "../../assets/newsletter-bg.jpeg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const FooterOne = () => {
  return (
    <div className=" flex items-center w-screen" style={{}}>
      <div
        className="h-80 w-screen"
        style={{ backgroundImage: `url(${imagesbg})` }}
      >
        <div className="flex items-center flex-col p-5 justify-center">
          <h2 className="text-yellow-700 uppercase">Newsletter</h2>
          <h2 className="p-3 text-2xl capitalize font-semibold ">
            signup for latest updates and offers
          </h2>
          <div className="flex gap-3">
            <input
              type="email"
              className="p-2 w-72 rounded-lg border-2"
              placeholder="Email Address"
            />
            <button className="bg-yellow-600 text-white rounded-md px-2 capitalize">
              subscribe
            </button>
          </div>

          <h2 className="font-semibold capitalize mt-5">
            will be used in accordance with our privacy policy
          </h2>
        </div>
        <div className="flex items-center justify-center gap-2 text-3xl ">
          <FaFacebookSquare className="cursor-pointer " />
          <FaInstagram className="cursor-pointer " />
          <FaLinkedin className="cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
