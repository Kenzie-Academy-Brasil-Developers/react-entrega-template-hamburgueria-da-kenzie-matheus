import styled from "styled-components";

export const DivContainerCarrinho = styled.ul`
  @media (min-width: 769px) {
    width: 365px;
  }
`;

export const UlCarrinho = styled.ul`
  border-bottom: 2px solid var(--grey-20);
  padding: 5px 5px 5px 5px;
`;

export const DivTittle = styled.div`
  width: 100%;
  height: 65px;

  display: flex;
  align-items: center;

  background-color: var(--Color-primary);
  border-radius: 8px 8px 0px 0px;

  h2 {
    margin-left: 10px;

    color: var(--grey-0);
  }

  @media (min-width: 769px) {
    h2 {
      margin-left: 15px;
    }
  }
`;
export const DivCarrinhocheio = styled.div`
  background-color: var(--grey-0);
`;
export const Buttongrey = styled.button`
  width: 90%;
  height: 60px;
  background-color: var(--grey-20);
  color: var(--grey-50);
  border: 2px solid var(--grey-20);
`;

export const DivCarrinhoVazio = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: var(--grey-0);
  line-height: 24px;

  h2 {
    font-size: 1.1rem;
    font-weight: 700;
  }

  span {
    font-size: 0.8rem;
    font-weight: 400;
    color: var();
  }

  @media (min-width: 769px) {
    height: 158px;
  }
`;

export const DivCarrinhoresult = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Precototal = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  width: 90%;

  font-size: 0.9rem;
  font-weight: 600;
  color: var(--grey-50);
`;
