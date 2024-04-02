import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const context = createContext();
const MyContext = ({ children }) => {
  const [catagories, setCatagories] = useState();
  const [products, setProducts] = useState();
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItem.map((item) => {
      count += item.attributes.handleProd;
      setCartCount(count);
    });
  }, [cartItem]);

  const handleAddItems = (product, handleProd) => {
    let items = [...cartItem];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.handleProd += handleProd;
    } else {
      product.attributes.handleProd = handleProd;
      items = [...items, product];
    }
    setCartItem(items);
  };

  const handleRemoveCart = (product) => {
    let items = [...cartItem];
    items = items.filter((p) => p.id !== product.id);
    setCartItem(items);
  };

  const handleCartProduct = (type, product) => {
    let items = [...cartItem];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.handleProd += 1;
    } else if (type === "dec") {
      if (items[index].attributes.handleProd === 1) return;
      items[index].attributes.handleProd -= 1;
    }
    updateCartCount(items);
  };
  const updateCartCount = (items) => {
    // Calculate total count of items in the cart

    const totalCount = items.reduce(
      (total, item) => total + item.attributes.handleProd,
      0
    );
    setCartTotalPrice(totalCount);
  };
 
   


  return (
    <context.Provider
      value={{
        cartItem,
        setCartTotalPrice,
        cartTotalPrice,
        setCartCount,
        cartCount,
        catagories,
        setCatagories,
        products,
        setProducts,
        handleRemoveCart,
        handleAddItems,
        handleCartProduct,
        updateCartCount,
      }}
    >
      {children}
    </context.Provider>
  );
};
export default MyContext;
