import React from "react";
import Products from "./../../Products/Products";
import useFetchAllData from "../../hooks/useFetchAllData";
const RelatedProducts = ({ prodId, catagoryId }) => {


  const {apiData} = useFetchAllData(`/api/products?populate=*&filters[id][$ne]=${prodId}&filters[catagories][id]=${catagoryId}&pagination[start]=1&pagination[limit]=4`)
  return (
    <div>
      <Products headText="Related Products" products={apiData}/>
    </div>
  );
};

export default RelatedProducts;
