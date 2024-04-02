import React from "react";

import styles from "../catagory/Catagory.module.css";
import { API_URL } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

const Catagory = ({ catagories }) => {
  console.log(catagories);
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div
        className={`${styles.catagoryMain} flex flex-wrap  items-center m-4  w-full object-contain gap-3`}
      >
        {catagories &&
          catagories.data.data.map((item) => {
            return (
              <img
                key={item.id}
                onClick={() => navigate(`/catagory/${item.id}`)}
                src={API_URL + item?.attributes?.img?.data?.attributes?.url}
                alt="catagory"
                className="hover:scale-105 hover:ease-in transition-all  cursor-pointer w-72 h-48"
              />
            );
          })}
      </div>
    </div>
  );
};

export default Catagory;
