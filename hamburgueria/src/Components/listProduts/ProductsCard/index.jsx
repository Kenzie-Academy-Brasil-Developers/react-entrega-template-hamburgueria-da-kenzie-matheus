import React from "react";
import { Slyledli, Containercontent } from "./Style";

export function ProductsCards({ product, setcurrentSale, currentSale }) {
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
          }}
        >
          Adicionar
        </button>
      </Containercontent>
    </Slyledli>
  );
}
