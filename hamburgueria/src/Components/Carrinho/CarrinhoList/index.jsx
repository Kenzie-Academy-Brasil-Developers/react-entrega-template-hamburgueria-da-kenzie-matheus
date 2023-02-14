import React from "react";
import { DivContainerdesc, LiCarrinho } from "./Style";

export function CarrinhoList({ item, currentSale, setcurrentSale }) {
  function removeItem() {
    const filter = currentSale.filter((product) => {
      return product.id !== item.id;
    });
    setcurrentSale(filter);
  }

  return (
    <LiCarrinho>
      <img src={item.img} alt="" />
      <DivContainerdesc>
        <h3>{item.name}</h3>
        <span>{item.category}</span>
      </DivContainerdesc>
      <button onClick={removeItem}>Remover</button>
    </LiCarrinho>
  );
}
