import React from "react";
import { ProductsCards } from "./ProductsCard";
import { Ulproducts } from "./Style";

export function Products({ productslist, currentSale, setcurrentSale, setsearch, searchbtn}) {
  return (
    <Ulproducts>
      {productslist.map((product) => {
        return (
          <ProductsCards
            key={product.id}
            product={product}
            setcurrentSale={setcurrentSale}
            currentSale={currentSale}
            setsearch={setsearch}
            searchbtn={searchbtn}
          />
        );
      })}
    </Ulproducts>
  );
}
