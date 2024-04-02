import React from "react";
import Products from "../Products/Products";
import useFetchAllData from "../hooks/useFetchAllData";
import { useParams } from "react-router-dom";
const CatagoryThree = () => {
  const { id } = useParams();
  const { apiData } = useFetchAllData(
    `/api/products?populate=*&filters[catagories][id]=${id}`
  );
  return (
    <div>
      <h1 className="font-semibold text-[1.5rem] my-3 mx-4 uppercase tracking-tight" >
        {
          apiData?.data?.data?.[0]?.attributes?.catagories?.data?.[0]
            ?.attributes?.title
        }  
      </h1>
      <Products products={apiData} />
    </div>
  );
};

export default CatagoryThree;
