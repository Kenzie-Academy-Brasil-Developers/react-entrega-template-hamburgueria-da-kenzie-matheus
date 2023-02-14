import React from "react";
import { CarrinhoList } from "./CarrinhoList";
import {
  Buttongrey,
  DivCarrinhocheio,
  DivCarrinhoresult,
  DivCarrinhoVazio,
  DivContainerCarrinho,
  DivTittle,
  Precototal,
  UlCarrinho,
} from "./Style";

export function CarrinoDeCompras({ currentSale, setcurrentSale }) {
  function removerTodos() {
    setcurrentSale([]);
  }

  return (
    <div>
      <DivContainerCarrinho>
        <DivTittle>
          <h2>Carrinho de compras</h2>
        </DivTittle>
        {currentSale.length > 0 ? (
          <DivCarrinhocheio>
            <UlCarrinho>
              {currentSale.map((item) => {
                return (
                  <CarrinhoList
                    key={item.id}
                    item={item}
                    currentSale={currentSale}
                    setcurrentSale={setcurrentSale}
                  />
                );
              })}
            </UlCarrinho>
            <DivCarrinhoresult>
              <Precototal>
                <span>Valor:</span>
                {currentSale.reduce((acc, current) => {
                  return acc + current.price;
                }, 0)}
              </Precototal>
              <Buttongrey onClick={removerTodos}>Remover todos</Buttongrey>
            </DivCarrinhoresult>
          </DivCarrinhocheio>
        ) : (
          <DivCarrinhoVazio>
            <h2>Sua sacola está vazia</h2>
            <span>Adicione itens</span>
          </DivCarrinhoVazio>
        )}
      </DivContainerCarrinho>
    </div>
  );
}
