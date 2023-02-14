import React from "react";
import { Slyledli, Containercontent } from "./Style";

export function ProductsCards({ product, setcurrentSale, currentSale, setsearch,searchbtn }) {
  return (
    <Slyledli>
      <img src={product.img} />
      <Containercontent>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <p>R$:{product.price}</p>
        <button
          onClick={() => {
            setcurrentSale([...currentSale, product]);
            setsearch("")
            searchbtn(false)
          }}
        >
          Adicionar
        </button>
      </Containercontent>
    </Slyledli>
  );
}
