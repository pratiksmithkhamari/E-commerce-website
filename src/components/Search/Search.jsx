import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import styles from "../Search/Search.module.css";
import useFetchAllData from "../hooks/useFetchAllData";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../utils/constant";
const Search = ({ closeSearch }) => {
  const [search, setSearch] = useState("");
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { apiData } = useFetchAllData(
    `/api/products?populate=*&filters[title][$contains]=${search}`
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);

    console.log(search);
  };
  return (
    <div
      className={`${styles.main} h-full w-[100%] bg-white z-40 fixed top-0 left-0`}
    >
      <div
        className={`${styles.container} header flex justify-center gap-5 items-center h-24 border border-b-black`}
      >
        <input
          type="text"
          autoFocus
          onChange={handleSearchChange}
          placeholder="search your products.."
          className={`${styles.inputBox} sm:min-w-[800px] h-12 text-center text-4xl outline-none rounded-sm border-none uppercase font-semibold text-slate-800`}
        />
        <ImCross
          className="text-pink-900 font-semibold absolute right-10 active:scale-90"
          onClick={() => closeSearch(false)}
        />
      </div>
      {apiData?.data?.data.map((item) => {
        return (
          <div
            key={item.id}
            className="searchresult flex flex-col gap-2 items-center mt-3 max-w-[1000px] my-0 mx-auto justify-center "
            onClick={() => {
              navigate(`/single-product/${item.id}`);
              closeSearch(false);
            }}
          >
            <div className="flex  gap-7 bg-slate-100 w-full hover:scale-[0.99] ease-in transition-all hover:bg-gray-200 h-[90px] border-b border-slate-500 active:bg-slate-500 active:text-white">
              <div className="h-90 w-90 bg-slate-200 flex justify-center items-center">
                <img
                  src={
                    API_URL + item?.attributes?.img?.data[0]?.attributes?.url
                  }
                  alt="descImg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col mt-3">
                <h2 className="capitalize font-semibold text-ellipsis overflow-hidden whitespace-nowrap block mb-2">
                  {item.attributes.title}
                </h2>
                <h2 className="capitalize text-ellipsis overflow-hidden whitespace-nowrap block mb-2">
                  {item.attributes.desc}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
