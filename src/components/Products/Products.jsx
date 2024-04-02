import React from "react";
import styles from "./../Products/Products.module.css";
import Product from "../Products/Product";

const Products = ({ products, innerPage, headText }) => {
 

  return (
    <div>
      <div className={styles.main}>
        {!innerPage && (
          <h1 className="text-2xl font-semibold uppercase subpixel-antialiased tracking-normal p-1 border-b-2 border-purple-600">
            {headText}
          </h1>
        )}
        <div
          className={`${styles.container} flex sm:flex-wrap items-center justify-center min-h-[100%] gap-14 m-7  `}
        >
          {products &&
            products.data.data.map((item) => {
              return (
                <Product key={item.id} id={item.id} data={item.attributes} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
