import React from "react";
import { ProductsCards } from "./ProductsCard";
import { Ulproducts } from "./Style";

export function Products({ productslist, currentSale, setcurrentSale }) {
  return (
    <Ulproducts>
      {productslist.map((product) => {
        return (
          <ProductsCards
            key={product.id}
            product={product}
            setcurrentSale={setcurrentSale}
            currentSale={currentSale}
          />
        );
      })}
    </Ulproducts>
  );
}
