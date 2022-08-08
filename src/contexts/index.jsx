import React from "react";
import CartProvider from "./CartContext";
import ProductsProvider from "./ProductsContext";

const Provider = ({ children }) => {
  return (
    <>
      <ProductsProvider>
        <ProductsProvider>
          <CartProvider>{children}</CartProvider>
        </ProductsProvider>
      </ProductsProvider>
    </>
  );
};

export default Provider;
